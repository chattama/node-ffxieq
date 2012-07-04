var os = require('os')
var fs = require("fs");
var path = require("path");
var util = require("util");
var sqlite3 = require("sqlite3");

var dbname = process.argv[2];
var outdir = process.argv[3];

var db = new sqlite3.Database(dbname, sqlite3.OPEN_READONLY);

db.each("select name from sqlite_master where type='table' order by name", function(err, table) {

	var collection = [];

	var stmt = db.prepare("select * from " + table.name);

	stmt.each(function(err, data) {
		collection.push(data);
	});

	stmt.finalize(function() {

		fs.mkdir(outdir);

		var output = path.normalize( path.join(outdir, table.name + ".json") );
		console.log(output);

		var stream = fs.createWriteStream(output, { "flags": "a" });
		for (var i = 0; i < collection.length; i++) {
			stream.write(JSON.stringify(collection[i]) + os.EOL);
		}
		stream.end();

		collection = [];
	});

}, function(err, num) {
	db.close();
});

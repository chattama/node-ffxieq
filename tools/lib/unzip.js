var fs = require("fs");
var path = require("path");
var jszip = require("node-zip");
var mkdirOrig = fs.mkdir;

var input = path.normalize(process.argv[2]);
var outdir = path.normalize(process.argv[3]);

fs.readFile(input, "binary", function(err, raw) {
	var zip = new jszip(raw);

	for (var name in zip.files) {

		var entry = zip.files[name];
		var output = path.join(outdir, entry.name);

		if (entry.options.dir)
			output = path.join(output, ".dummy");

		mkdir_p(path.dirname(output));

		if (!entry.options.dir)
			fs.writeFile(output, entry.data, "binary");
	}
});


function mkdir_p(path, mode, callback, position) {

	var osSep = process.platform === 'win32' ? '\\' : '/';
	var parts = require('path').normalize(path).split(osSep);

	mode = mode || process.umask();
	position = position || 0;

	if (position >= parts.length) {
		return;
	}

	var directory = parts.slice(0, position + 1).join(osSep) || osSep;
	fs.stat(directory, function(err) {    
		if (err === null) {
			return mkdir_p(path, mode, callback, position + 1);
		} else {
			fs.mkdir(directory, mode, function (err) {
				if (err && err.errno != 17) {
					//return callback(err);
					throw err;
				} else {
					return mkdir_p(path, mode, callback, position + 1);
				}
			});
		}
	});
}

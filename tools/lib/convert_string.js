var fs = require("fs");
var path = require("path");
var util = require("util");
var xml2js = require("xml2js");

var input = path.normalize(process.argv[2]);
var output = path.normalize(process.argv[3]);

fs.readFile(input, function(err, xml) {
	var parser = new xml2js.Parser();
	parser.parseString(xml, function(err, js) {
		var R = { string: {}, array: {} };
		{
			var elem = js["string"];
			for (var i = 0; i < elem.length; i++) {
				R.string[ elem[i]["@"]["name"] ] = elem[i]["#"];
			}
		}
		{
			var elem = js["string-array"];
			for (var i = 0; i < elem.length; i++) {
				var values = elem[i]["item"];
				var array = [];
				for (var index = 0; index < values.length; index++) {
					array[ index ] = {
						index: index,
						value: values[index]
					};
				}
				R.array[ elem[i]["@"]["name"] ] = array;
			}
		}
		fs.writeFile(output, util.format("module.exports=%j;", R));
		fs.writeFile(output + ".txt", util.inspect(R));
	});
});

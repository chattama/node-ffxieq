var mongoose = require("mongoose")

module.exports = function (app, config) {

	return app.getModel('Base', true).extend(function() {
		var dbcfg = app.set("database");
		this.conn = {};
		for (var i in dbcfg.dbs) {
			this.conn[ dbcfg.dbs[i] ] = mongoose.createConnection(dbcfg.host, dbcfg.dbs[i], dbcfg.port)
		}
	})

	.methods({

		db: function(dbname) {
			return this.conn[dbname];
		},

		// escape regex character
		escape: function(str) {
			return (str || "").replace(/[\\|\/|\.|\^|\$|\[|\]|\*|\+|\?|\||\(|\)]/g, "\\$&");
		},

		// create regex object
		regex: function(str) {
			return new RegExp(str || "", "i");
		},
	})
}

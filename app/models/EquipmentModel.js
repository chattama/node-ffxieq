var mongoose = require("mongoose")
var async = require("async")
var _ = require("underscore")
var R = require("../lib/res/stringsext")
var FFXIString = require("../lib/res/ffxistring")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "Equipment";

	var schema = {
		_id: Number,
		Name: String,
		Part: String,
		Weapon: String,
		Job: String,
		Race: String,
		Lv: Number,
		Rare: String,
		Ex: String,
		DescriptionOrg: String,
		Description: String,
	}

	return app.getModel("Application", true).extend(function() {
		this.Schema = new mongoose.Schema(schema, { collection: collection });
		this.Model = this.db(dbname).model(collection, this.Schema);
	})
	.methods({

		query: function(option, callback) {
console.log(option)

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			option = _.extend({
				part: 0,
				job: -1,
				lv: 99,
				type: "",
				filter: "",
				lvsort: true,
			}, option)

			var self = this;

			async.parallel([
				function(complete) {
					self.getString(Number(FFXIString.PART_DB_MAIN) + Number(option.part), function(value) {
						complete(null, value);
					});
				},
				function(complete) {
					self.getString(Number(FFXIString.JOB_DB_WAR) + Number(option.job), function(value) {
						complete(null, value);
					});
				},
				function(complete) {
					self.getString(Number(FFXIString.JOB_DB_ALL), function(value) {
						complete(null, value);
					});
				},
			],
			function(err, results) {

				var part = self.regex(self.escape(results[0]));
				var job = self.regex(self.escape(results[1]));
				var alljob = self.regex(self.escape(results[2]));
				var filter = self.regex(self.escape(option.filter));

				var q = self.Model.find();
				q.where("Part", part);
				q.or([ { "Job": job }, { "Job": alljob } ]);
				//q.or([ { Name: filter }, { Description: filter } ]);
				if (option.lvsort)
					q.sort("Lv", -1);
				q.sort("Name", 1);
				//q.limit(50);

				q.execFind(function(err, docs) {
					if (err) throw new Error(err)
					callback.apply(self, [ docs ])
				});

			});
		},

		types: function(option, callback) {

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			var q = this.Model.distinct("Type")

			q.run(function(err, docs) {
				if (err) throw new Error(err)

				var ret = [];
				ret.push({ Type: R.string["ResetFilterByType"] });

				for (var i in docs)
					ret.push({ Type: docs[i] });

				callback.apply(this, [ ret ])
			})
		},

	})
}

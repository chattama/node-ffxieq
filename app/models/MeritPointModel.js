var mongoose = require('mongoose')
var _ = require("underscore")
var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "MeritPoint";

	var schema = {
		_id: Number,
		Title: String,
		Job: String,
		Description1: String,
		Description2: String,
		Description3: String,
		Description4: String,
		Description5: String,
	}

	return app.getModel("Application", true).extend(function() {
		this.Schema = new mongoose.Schema(schema, { collection: collection });
		this.Model = this.db(dbname).model(collection, this.Schema);
	})
	.methods({

		query: function(option, callback) {

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			option = _.extend({
			}, option)

			var q = this.Model.find();
			q.select([ "_id", "Title", "Job" ]);
			if (option.job)
				q.where("Job", this.escape(option.job));
			q.sort("_id", 1);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				_.each(docs, function(doc) {
					doc.set("Category", (doc._id % 100) < 10 ? "1" : "2");
					doc.set("Job", R.map.Jobs[doc.Job]);
				});
				callback.apply(this, [ docs ])
			});
		},

	})
}

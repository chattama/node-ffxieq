var mongoose = require('mongoose')
var _ = require("underscore")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "VWAtma";

	var schema = {
		_id: Number,
		subId: Number,
		Name: String,
		Lv: Number,
		Description: String,
	}

	var LV_MAX = 15;

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
				id: -1,
				subId: -1,
				filter: "",
			}, option)

			var filter = this.regex(this.escape(option.filter));

			var q = this.Model.find();
			q.or([ { Name: filter }, { Description: filter } ]);

			if (option.id > -1)
				q.where("_id", option.id);

			if (option.subId > -1)
				q.where("subId", option.subId);
			else
				q.where("Lv", LV_MAX);

			q.sort("_id", 1);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				callback.apply(this, [ docs ])
			});
		},

	})
}

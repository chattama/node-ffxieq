var mongoose = require("mongoose")
var _ = require("underscore")
var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "Strings";

	var schema = {
		id: Number,
		value: String,
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
				id: -1,
			}, option)

			var q = this.Model.find();

			if (option.id > -1)
				q.where("id", option.id);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				callback.apply(this, [ docs ])
			});
		},

	})
}

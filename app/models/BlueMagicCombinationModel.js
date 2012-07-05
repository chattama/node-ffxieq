var mongoose = require("mongoose")
var _ = require("underscore")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "BlueMagicCombination";

	var schema = {
		_id: Number,
		SetID: Number,
		Description: String,
		Magics: String,
		Point: Number,
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
				filter: "",
			}, option)

			var id = option.id;
			var filter = this.regex(this.escape(option.filter));

			var q = this.Model.find();
			q.or([ { "Name": filter }, { "Description": filter } ]);

			if (id > -1)
				q.where("_id", id);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				callback.apply(this, [ docs ])
			});
		},

	})
}

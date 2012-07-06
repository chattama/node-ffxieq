var mongoose = require("mongoose")
var _ = require("underscore")
var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "Food";

	var schema = {
		_id: Number,
		Name: String,
		Type: String,
		Description: String,
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
				type: "",
				filter: "",
			}, option)

			var filter = this.regex(this.escape(option.filter));

			var q = this.Model.find();
			q.or([ { "Name": filter }, { "Description": filter } ]);

			if (option.id > -1)
				q.where("_id", option.id);

			if (option.type != "" && option.type != "全て")
				q.where("Type", option.type);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				callback.apply(this, [ docs ])
			});
		},

		types: function(option, callback) {

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			var q = this.Model.distinct("Type")

			q.exec(function(err, docs) {
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

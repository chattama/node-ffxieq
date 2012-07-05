var mongoose = require("mongoose")
var _ = require("underscore")
var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	var dbname = "ffxieq";

	var collection = "Magic";

	var schema = {
		_id: Number,
		Type: String,
		Name: String,
		SubId: Number,
		SubName: String,
		Description: String,
		Memo: String,
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
				SubId: -1,
				type: "",
				filter: "",
			}, option)

			var filter = this.regex(this.escape(option.filter));

			var q = this.Model.find();
			q.or([ { "Name": filter }, { "Description": filter } ]);
			//q.limit(50);

			if (option.id > -1)
				q.where("_id", option.id);

			if (option.SubId > -1) {
				q.where("SubId", option.SubId);
			} else {
				//if (option.type != "" && option.type != "全て")
				//	q.where("Type", option.type);
			}

			q.sort("Type", 1, "_id", 1);

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				callback.apply(this, [ docs ])
			});
		},

		group: function(option, callback) {
			this.query(option, function(docs) {
				docs = _.groupBy(docs, "SubId");
				docs = _.map(docs, function(doc, index, list) {
					return {
						SubId: index,
						Type: doc[0].Type,
						Name: doc[0].Name,
					};
				});
				callback.apply(this, [ docs ])
			})
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

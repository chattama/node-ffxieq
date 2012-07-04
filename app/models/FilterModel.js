var mongoose = require("mongoose")

module.exports = function(app, config) {

	var dbname = "ffxisettings";

	var collection = "Filters";

	var schema = {
		Filter: String,
		LastUsed: Number,
	}

	var MAX_FILTERS = 16;

	return app.getModel("Application", true).extend(function() {
		this.Schema = new mongoose.Schema(schema, { collection: collection });
		this.Model = this.db(dbname).model(collection, this.Schema);
	})

	.methods({

		query: function(option, callback) {
			console.log("Filters query");

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			var q = this.Model.find();
			q.desc("LastUsed", "_id")

			q.execFind(function(err, docs) {
				if (err) throw new Error(err)
				console.log(docs);
				callback.apply(this, [ docs ])
			});
		},

		add: function(option, callback) {
			console.log("Filters add");

			if ("function" === typeof criteria) {
				callback = criteria;
				option = {};
			}

			if (!option.filter)
				return;

			var m = this.Model;

			var filter = option.filter;
			//console.log(filter);

			var q = m.find();
			q.where("Filter", filter)
			//q.desc("LastUsed")

			// remove search string from collection
			q.remove(function(err, count) {
				if (err) throw new Error(err)
				//console.log(count);

				var q = m.find();
				q.desc("LastUsed")
				q.skip(MAX_FILTERS);

				// find and remove older record
				q.find(function(err, docs) {
					if (err) throw new Error(err)

					docs.forEach(function(doc) {
						console.log(doc);
						doc.remove();
					});

					// insert new record
					var data = new m({
						Filter: option.filter,
						LastUsed: Date.now()
					});
					data.save(function(err, doc) {
						callback.apply(this, [ doc ])
					});
				});
			});
		},

	})

	.statics({
	})

}

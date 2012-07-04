var _ = require("underscore")
var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {
			this.render(res, "/option", {
			})
		},

		merits: function(req, res) {

			var Model = app.getModel("MeritPoint", true);
			var model = new Model();

			var self = this;
			var sync = function(o) {
				self.render(res, "/option/merits", {
					MeritsJobSpec: o.MeritsJobSpec,
				})
			};

			model.query({
			}, function(docs) {
				// table to hogan.js structure
				docs = _.groupBy(docs, "Job");
				docs = _.map(docs, function(doc, index, list) {
					var ret = {};
					ret = _.groupBy(doc, function(item) { return item.get("Category") })
					ret["Job"] = index;
					return ret;
				});
				sync({ MeritsJobSpec: docs });
			});

		},

		skill: function(req, res) {
			this.render(res, "/option/skill", {
			})
		},

		bluemagic: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, filter);

			this.render(res, "/option/bluemagic", {
				index: req.query.index,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

	})

}

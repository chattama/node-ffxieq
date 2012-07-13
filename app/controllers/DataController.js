var _ = require("underscore")

module.exports = function(app, config) {

	return app.getController("Application", true).extend({
	})

	.statics({
	})

	.methods({

		query: function(res, model, option, method, callback) {
			option = option || {};
			method = method || "query";
			var Model = app.getModel(model, true);
			var model = new Model();
			model[method].apply(model, [ option,  function(docs) {
				if (callback) docs = callback.apply(this, [ docs ]);
				res.send(JSON.stringify(docs));
			} ]);
		},

		filter: function(req, res) {
			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();
			res.send(JSON.stringify(model.get(req.session).Filters));
		},

		atma: function(req, res) {
			this.query(res, "Atma", {
				filter: req.query.filter || ""
			});
		},

		vwatma: function(req, res) {
			this.query(res, "VWAtma", {
				filter: req.query.filter || ""
			});
		},

		vwatmaset: function(req, res) {
			this.query(res, "VWAtma", {
				SubId: req.query.subid,
			});
		},

		food: function(req, res) {
			this.query(res, "Food", {
				filter: req.query.filter || "",
				type: req.query.type || "",
			});
		},

		foodtype: function(req, res) {
			this.query(res, "Food", {}, "types");
		},

		equipset: function(req, res) {
			this.query(res, "Equipment", {
				//job: 1,
				//lv: 99,
				part: req.query.part,
				type: req.query.type,
				lvsort: (req.query.lvsort == "true"),
				filter: req.query.filter,
			});
		},

		equiptype: function(req, res) {
			this.query(res, "Equipment", {
				//job: 1,
				//lv: 99,
				part: req.query.part,
				type: req.query.type,
				lvsort: (req.query.lvsort == "true"),
				filter: req.query.filter,
			}, "types");
		},

		magic: function(req, res) {
			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			var magics = charset.Info.getMagics();

			this.query(res, "Magic", {}, "group", function(docs) {
				docs = _.map(docs, function(doc, index, list) {
					var selected = magics[ doc.SubId ];
					if (selected) {
						doc = selected;
						doc.selected = true;
					}
					return doc;
				})
				return docs;
			});
		},

		magicset: function(req, res) {
			this.query(res, "Magic", {
				SubId: req.query.subid,
			});
		},

		magictype: function(req, res) {
			this.query(res, "Magic", {
				filter: req.query.filter || "",
				type: req.query.magictype || "",
			});
		},

		bluemagic: function(req, res) {
			this.query(res, "BlueMagic", {
				filter: req.query.filter || "",
			});
		},

	})

}

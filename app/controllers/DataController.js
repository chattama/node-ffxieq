module.exports = function(app, config) {

	return app.getController("Application", true).extend({
	})

	.statics({
	})

	.methods({

		query: function(res, model, option, method) {
			option = option || {};
			method = method || "query";
			var Model = app.getModel(model, true);
			var model = new Model();
			model[method].apply(model, [ option,  function(docs) {
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
			this.query(res, "Magic", {}, "group");
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

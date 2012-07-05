module.exports = function(app, config) {

	return app.getController("Application", true).extend({
	})

	.statics({
	})

	.methods({

		query: function(res, model, option) {

			option = option || {};

			var Model = app.getModel(model, true);
			var model = new Model();

			model.query(option, function(docs) {
				res.send(JSON.stringify(docs));
			});
		},

		filter: function(req, res) {
			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();
			res.send(JSON.stringify(model.get(req.session).Filters));
		},

		atma: function(req, res) {
			this.query(res, "Atma", { filter: req.query.filter || "" });
		},

		vwatma: function(req, res) {
			this.query(res, "VWAtma", { filter: req.query.filter || "" });
		},

		food: function(req, res) {
			this.query(res, "Food", {
				filter: req.query.filter || "",
				type: req.query.foodtype || "",
			});
		},

		foodtype: function(req, res) {
			var Model = app.getModel("Food", true);
			var model = new Model();
			model.types({
			}, function(docs) {
				res.send(JSON.stringify(docs));
			});
		},

		magic: function(req, res) {
			var Model = app.getModel("Magic", true);
			var model = new Model();
			model.group({}, function(docs) {
				res.send(JSON.stringify(docs));
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
			this.query(res, "BlueMagic", { filter: req.query.filter || "" });
		},

	})

}
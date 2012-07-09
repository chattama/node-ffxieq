var SessionObject = require("../lib/SessionObject"),
	FFXICharacter = require("../lib/ffxieq/FFXICharacter"),
	Atma = require("../lib/ffxieq/Atma"),
	Food = require("../lib/ffxieq/Food")

module.exports = function(app, config) {

	return app.getController("Application", true).extend({
	})

	.statics({
	})

	.methods({

		save: function(req, res) {
			var method = req.query.method || req.body.method;
			if (method && this[method])
				this[method].apply(this, arguments);
			else
				res.send(JSON.stringify({}));
		},

		atma: function(req, res) {

			var index = req.body.index;
			var atma = new Atma(req.body._id, req.body.Name, req.body.Description);

			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			charset.Info.setAtma(index, atma);

			model.setCurrentCharacterSet(req.session, charset);

			res.send(JSON.stringify({}));
		},

		vwatma: function(req, res) {

			var index = req.body.index;
			var atma = new Atma(req.body._id, req.body.Name, req.body.Description);

			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			charset.Info.setVWAtma(index, atma);

			model.setCurrentCharacterSet(req.session, charset);

			res.send(JSON.stringify({}));
		},

		food: function(req, res) {

			var index = req.body.index;
			var food = new Food(req.body._id, req.body.Name, req.body.Description);

			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			charset.Info.setFood(index, food);

			model.setCurrentCharacterSet(req.session, charset);

			res.send(JSON.stringify({}));
		},

		bluemagic: function(req, res) {
			res.send(JSON.stringify({}));
		},

	})

}

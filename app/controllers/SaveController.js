var SessionObject = require("../lib/SessionObject"),
	FFXICharacter = require("../lib/ffxieq/FFXICharacter"),
	Atma = require("../lib/ffxieq/Atma"),
	Food = require("../lib/ffxieq/Food"),
	Magic = require("../lib/ffxieq/Magic")

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

		magicset: function(req, res) {

			var magic = new Magic(req.body._id, req.body.SubId, req.body.Name, req.body.Description, req.body.Memo);
			magic.SubName = req.body.SubName;

			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			charset.Info.addMagic(magic);

			model.setCurrentCharacterSet(req.session, charset);

			res.send(JSON.stringify({}));
		},

		magicremove: function(req, res) {

			var subid = req.body.subid;

			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();

			var charset = model.getCurrentCharacterSet(req.session);
			charset.Info.delMagic(subid);

			model.setCurrentCharacterSet(req.session, charset);

			res.send(JSON.stringify({}));
		},

		bluemagic: function(req, res) {
			res.send(JSON.stringify({}));
		},

	})

}

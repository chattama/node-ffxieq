var Food = require("../lib/ffxieq/Food")
var FFXICharacter = require("../lib/ffxieq/FFXICharacter")
var SessionObject = require("../lib/SessionObject")

module.exports = function(app, config) {

	return app.getController("Application", true).extend({
	})

	.statics({
	})

	.methods({

		save: function(req, res) {

			var method = req.query.method;

			if (method && this[method])
				this[method].apply(this, arguments);

			res.send(JSON.stringify({}));
		},

		atma: function(req, res) {
			res.send(JSON.stringify({}));
		},

		vwatma: function(req, res) {
			res.send(JSON.stringify({}));
		},

		food: function(req, res) {

			var index = req.query.index;
			var id = req.query._id;

			var FFXIEQSettingsModel = app.getModel("FFXIEQSettings", true);
			var settingmodel = new FFXIEQSettingsModel();

			var charinfo = settingmodel.getCharacter(req.session);
			charinfo.Info.setFood(index, new Food(id, null, null));

			settingmodel.setCharacter(req.session, charinfo);

			res.send(JSON.stringify({}));
		},

		bluemagic: function(req, res) {
			res.send(JSON.stringify({}));
		},

	})

}

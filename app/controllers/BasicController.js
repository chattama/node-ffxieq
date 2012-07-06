var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {
			this.render(res, "/basic/basic", {
			})
		},

		food: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, filter);

			var name = "";
			var desc = "";

			var FFXIEQSettingsModel = app.getModel("FFXIEQSettings", true);
			var settingmodel = new FFXIEQSettingsModel();
			var charinfo = settingmodel.getCharacter(req.session);

			var food = charinfo.Info.getFood(req.query.index);

			// sync/async process
			var context = this;
			var sync = function(o) {
				context.render(res, "/basic/food", {
					index: req.query.index,
					filter: req.query.filter,
					type: req.query.type,
					name: o.name,
					desc: o.desc,
					WebSearch0: R.array.SearchURIs[0].value,
					WebSearch1: R.array.SearchURIs[1].value,
				})
			};

			if (food && food.Id) {

				var FoodModel = app.getModel("Food", true);
				var foodmodel = new FoodModel();

				foodmodel.query({
					id: food.Id,
				}, function(docs) {

					name = docs[0].Name;
					desc = docs[0].Description;

					sync({ name: name, desc: desc });
				});

			} else {

				name = R.string.FoodNotSelected;
				desc = desc;

				sync({ name: name, desc: desc });
			}
		},

		atma: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, filter);

			this.render(res, "/basic/atma", {
				index: req.query.index,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

		vwatma: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, filter);

			this.render(res, "/basic/vwatma", {
				index: req.query.index,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

	})

}

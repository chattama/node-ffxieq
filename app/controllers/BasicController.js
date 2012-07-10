var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {

			var FFXIEQSettingsModel = app.getModel("FFXIEQSettings", true);
			var settingmodel = new FFXIEQSettingsModel();

			var charset = settingmodel.getCurrentCharacterSet(req.session);
console.log(JSON.stringify(charset))

			var atma = [];
			for (var i = 0; i <= 2; i++) {
				var obj = charset.Info.getAtma(i);
				atma.push({ index: i, name: (obj == null) ? R.string.AtmaNotSelected: obj.Name });
			}

			var vwatma = [];
			for (var i = 0; i <= 2; i++) {
				var obj = charset.Info.getVWAtma(i);
				vwatma.push({ index: i, name: (obj == null) ? R.string.VWAtmaNotSelected: obj.Name });
			}

			var food = [];
			for (var i = 0; i <= 0; i++) {
				var obj = charset.Info.getFood(i);
				food.push({ index: i, name: (obj == null) ? R.string.FoodNotSelected: obj.Name });
			}

			this.render(res, "/basic/basic", {
				atma: atma,
				vwatma: vwatma,
				food: food,
			})
		},

		food: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, req.query.filter);

			var name = "";
			var desc = "";

			var FFXIEQSettingsModel = app.getModel("FFXIEQSettings", true);
			var settingmodel = new FFXIEQSettingsModel();

			var charset = settingmodel.getCurrentCharacterSet(req.session);

			var food = charset.Info.getFood();

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
				this.addFilter(req, req.query.filter);

			this.render(res, "/basic/atma", {
				index: req.query.index,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

		vwatma: function(req, res) {

			if (req.query.addfilter == "true")
				this.addFilter(req, req.query.filter);

			this.render(res, "/basic/vwatma", {
				index: req.query.index,
				filter: req.query.filter,
			})
		},

		vwatmaset: function(req, res) {
			this.render(res, "/basic/vwatmaset", {
				index: req.query.index,
				subid: req.query.subid,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

	})

}

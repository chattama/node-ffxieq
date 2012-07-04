var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {

			var Equipments = [];
			{
				var array = R.array.Parts;
				for (var i = 0; i < array.length; i++) {
					Equipments[i] = { index: array[i].index, value: array[i].value + ": " };
				}
			}

			this.render(res, "/equip", {
				Equipments: Equipments,
			})
		},

	})

}

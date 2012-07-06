var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {
			this.render(res, "/equip", {
				Parts: R.array.Parts,
			})
		},

		equipset: function(req, res) {
			this.render(res, "/equip/equipset", {
				part: req.query.part,
				type: req.query.type,
				lvsort: req.query.lvsort,
				filter: req.query.filter,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

	})

}

var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.getController("Application", true).extend(function() {
	})

	.statics({
	})

	.methods({

		index: function(req, res) {
			this.render(res, "/magic", {
			})
		},

		magicset: function(req, res) {
			this.render(res, "/magic/magicset", {
				subid: req.query.subid,
				WebSearch0: R.array.SearchURIs[0].value,
				WebSearch1: R.array.SearchURIs[1].value,
			})
		},

	})

}

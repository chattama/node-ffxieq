var R = require("../lib/res/stringsext")

module.exports = function(app, config) {

	return app.controllers.Base.extend(function() {
	})

	.statics({
	})

	.methods({

		render: function(res, view, opt) {
			opt["string"] = R.string;
			opt["array"] = R.array;
			this.supr(res, view, opt)
		},

		getFilter: function(req) {
			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();
			return model.getFilter(req.session);
		},

		addFilter: function(req, filter) {
			var Model = app.getModel("FFXIEQSettings", true);
			var model = new Model();
			model.addFilter(req.session, filter);
		},

	})

}

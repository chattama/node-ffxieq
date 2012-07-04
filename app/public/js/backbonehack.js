//Backbone.Model.prototype._super =
//Backbone.Collection.prototype._super =
Backbone.View.prototype._super = function(funcName) {
	return this.constructor.__super__[ funcName ].apply(this, _.rest(arguments));
};

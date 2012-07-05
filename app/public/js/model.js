var model = {
	_models: [
		"Atma",
		"VWAtma",
		"Filter",
		"Equip",
		"Magic",
		"Food",
		"MeritPoint",
		"BlueMagic",
	],
	init: function() {
		for (var i in this._models) {
			var m = this._models[i];
			this[m] = Backbone.Model.extend();
			this[m+"s"] = Backbone.Collection.extend({ model: this[m] });
		}
	},
};
model.init();

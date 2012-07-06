var EquipTypeListView = ListView.extend({

	url: "/data/equiptype",

	collection: new model.Foods(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { type: model.get("Type") || "" });
		console.log(param);

		var name = $("<h6 />");
		name.text(param.type);

		var link = $("<a />");
		link.attr("href", "/equip/equipset?" + $.param(param));
		link.append(name);
		link.bind("vclick", function(event) {
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

});

(function($) {
	$.widget("eq.EquipTypeListView", $.eq.eqlistview, { view: EquipTypeListView });
})(jQuery);

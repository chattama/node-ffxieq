var EquipSetListView = ListView.extend({

	url: "/data/equipset",

	collection: new model.Equips(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { _id: model.get("_id") });

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.html(this.highlight(model.get("Name") || "", param.filter) + (model.get("aaa") || ""));

		var desc = $("<p />");
		desc.addClass("eq-font-mono");
		desc.html(this.highlight(model.get("Description") || "", param.filter));

		var memo = $("<p />");
		memo.addClass("eq-font-mono");
		memo.html(this.highlight(model.get("Memo") || "", param.filter));

		var link = $("<a />");
		link.attr("href", "#confirm");
		link.attr("data-rel", "dialog");
		link.append(name);
		link.append(desc);
		link.append(memo);
		link.bind("vclick", function(event) {
			view.save(event, model, "equipset");
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

});

(function($) {
	$.widget("eq.EquipSetListView", $.eq.eqlistview, { view: EquipSetListView });
})(jQuery);

var AtmaListView = ListView.extend({

	url: "/data/atma",

	collection: new model.Atmas(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { _id: model.get("_id") });

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.html(this.highlight(model.get("Name") || "", param.filter));

		var desc = $("<p />");
		desc.addClass("eq-font-mono");
		desc.html(this.highlight(model.get("Description") || "", param.filter));

		var link = $("<a />");
		link.attr("href", "#confirm");
		link.attr("data-rel", "dialog");
		link.append(name);
		link.append(desc);
		link.bind("vclick", function(event) {
			view.save(event, model, "atma");
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},
});

(function($) {

	$.widget("eq.AtmaListView", $.eq.eqlistview, { view: AtmaListView });

})(jQuery);

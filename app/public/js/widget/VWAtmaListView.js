var VWAtmaListView = ListView.extend({

	url: "/data/vwatma",

	collection: new model.VWAtmas(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { subid: model.get("subId") });

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.html(this.highlight(model.get("Name") || "", param.filter));

		var desc = $("<p />");
		desc.addClass("eq-font-mono");
		desc.html(this.highlight(model.get("Description") || "", param.filter));

		var link = $("<a />");
		link.attr("href", "/basic/vwatmaset?" + $.param(param));
		link.append(name);
		link.append(desc);
		link.bind("vclick", function(event) {
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

});

(function($) {
	$.widget("eq.VWAtmaListView", $.eq.eqlistview, { view: VWAtmaListView });
})(jQuery);

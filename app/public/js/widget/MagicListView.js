var MagicListView = ListView.extend({

	url: "/data/magic",

	collection: new model.Magics(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { subid: model.get("SubId") });

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.html(this.highlight(model.get("Name") || "", param.filter) + (model.get("SubName") || ""));

		var link = $("<a />");
		link.attr("href", "/magic/magicset?" + $.param(param));
		link.append(name);
		link.bind("vclick", function(event) {
		});

		var li = $("<li />");
		if (model.get("selected")) li.addClass("ui-btn-active");
		li.append(link);

		return li;
	},

});

(function($) {
	$.widget("eq.MagicListView", $.eq.eqlistview, { view: MagicListView });
})(jQuery);

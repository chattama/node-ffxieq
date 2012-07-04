var FilterListView = ListView.extend({

	url: "/data/filter",

	collection: new model.Filters(),

	reset: function() {
		var view = this;

		this.param = $.parse($(this.el).attr("eq-attr") || "");
		this.collection.url = this.url + "?" + $.param(this.param);

		$(this.el).html("");

		this.collection.fetch({
			success: function(collection, resp) {
				collection.each(function(model) { view.add(model); });
				view.render();
			}
		});
	},

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, {
			filter: model.get("Filter") || "",
			addfilter: true,
		});

		var link = $("<a />");
		link.attr("href", "#");
		link.text(param.filter);
		link.append(name);
		link.bind("vclick", function(event) {
			view.o.vclick.apply(view, [ event, model ]);
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

});

(function($) {

	$.widget("eq.FilterListView", $.eq.eqlistview, {
		options: {
			vclick: function(event, model) {},
		},
		view: FilterListView,
	});

})(jQuery);

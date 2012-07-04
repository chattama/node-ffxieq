var FoodTypeListView = ListView.extend({

	url: "/data/foodtype",

	collection: new model.Foods(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { foodtype: model.get("Type") || "" });
		console.log(param);

		var name = $("<h6 />");
		name.text(param.foodtype);

		var link = $("<a />");
		link.attr("href", "/basic/food?" + $.param(param));
		link.append(name);
		link.bind("vclick", function(event) {
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

});

(function($) {

	$.widget("eq.FoodTypeListView", $.eq.eqlistview, { view: FoodTypeListView });

})(jQuery);

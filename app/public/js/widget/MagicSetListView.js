var MagicSetListView = ListView.extend({

	url: "/data/magicset",

	collection: new model.Magics(),

	template: function(model) {
		var view = this;

		var param = $.extend({}, view.param, { _id: model.get("_id") });

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.html(this.highlight(model.get("Name") || "", param.filter) + (model.get("SubName") || ""));

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
			view.save(event, "magicset", "/magic", $.extend(view.param, model.attributes));
		});

		var li = $("<li />");
		li.append(link);

		return li;
	},

	save: function(event, method, redirect, data) {

		var name = $("<h1 />");
		name.addClass("ui-li-heading");
		name.text(data.Name || "");

		var desc = $("<p />");
		desc.addClass("eq-font-mono");
		desc.text(data.Description || "");

		var memo = $("<p />");
		memo.addClass("eq-font-mono");
		memo.text(data.Memo || "");

		var detail = $("#eq-data-detail");
		detail.html("");
		detail.append(name);
		detail.append(desc);
		detail.append(memo);

		var apply = $("#eq-data-apply");
		apply.bind("vclick", function(event) {
			$.ajax({
				url			: "/data/save",
				type		: 'POST',
				dataType	: 'json',
				cache		: false,
				data		: $.extend(true, data, { method: method }),
				success		: function() {
					if (redirect) $(location).attr("href", redirect);
				},
				error		: function() { console.log(arguments) },
			});
		});

		var web0 = $("#eq-data-websearch0");
		web0.attr("href", web0.attr("eq-attr") + this.searchtitle(data.Name));

		var web1 = $("#eq-data-websearch1");
		web1.attr("href", web1.attr("eq-attr") + this.searchtitle(data.Name));
	},

});

(function($) {
	$.widget("eq.MagicSetListView", $.eq.eqlistview, { view: MagicSetListView });
})(jQuery);

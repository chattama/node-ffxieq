var ListView = Backbone.View.extend({

	url: "",

	collection: {},

	param: {},

	initialize: function(id, options) {
		this.el = id;
		this.o = options
		this.param = $.parse($(this.el).attr("eq-attr") || "");
		this.collection.url = this.url + "?" + $.param(this.param);
	},

	render: function() {
		$(this.el).listview("refresh");
	},

	reset: function() {
		var view = this;

		this.param = $.parse($(this.el).attr("eq-attr") || "");
		this.collection.url = this.url + "?" + $.param(this.param);

		$(this.el).html("");

		this.collection.fetch({
			success: function(docs, resp) {
				docs.each(function(model) { view.add(model); });
				view.render();
			},
		});
	},

	add: function(model) {
		$(this.el).append(this.template(model));
	},

	template: function(model) {
		return "";
	},

	highlight: function(text, word) {
		return text.replace(new RegExp((word || "").replace(/[\\|\/|\.|\^|\$|\[|\]|\*|\+|\?|\||\(|\)]/g, "\\$&"), "i"), "<span class=\"eq-highlight\">$&</span>");
	},

	searchtitle: function(text) {
		return text.replace(new RegExp("(.*)\\(.*", "i"), "$1");
	},

	save: function(event, method, redirect, data) {

		var h1 = $("<h1 />");
		h1.addClass("ui-li-heading");
		h1.text(data.Name || "");

		var p = $("<p />");
		p.addClass("eq-font-mono");
		p.text(data.Description || "");

		var detail = $("#eq-data-detail");
		detail.html("");
		detail.append(h1);
		detail.append(p);

		var apply = $("#eq-data-apply");
		apply.bind("vclick", function(event) {
			$.ajaxSetup({
				cache : false,
				contentType : 'application/x-www-form-urlencoded; charset=utf-8'
			});
			$.ajax({
				url			: "/data/save",
				type		: 'POST',
				dataType	: 'json',
				data		: $.extend(true, data, { method: method }),
				success		: function() {
					if (redirect) $(location).attr("href", redirect);
				},
				error		: function() { console.log(arguments) },
			});
			return false;
		});

		var web0 = $("#eq-data-websearch0");
		web0.attr("href", web0.attr("eq-attr") + this.searchtitle(data.Name));

		var web1 = $("#eq-data-websearch1");
		web1.attr("href", web1.attr("eq-attr") + this.searchtitle(data.Name));
	},

});

(function($) {
	$.widget("eq.eqlistview", $.eq.widget, {
		options: {},
		view: function() {},
		_init: function() {
			this.id = this.element.attr("id");
			this.listview = new this.view("#" + this.id, this.options);
			this.listview.reset();
		},
		refresh: function() {
			this.listview.reset();
		},
	});
})(jQuery);

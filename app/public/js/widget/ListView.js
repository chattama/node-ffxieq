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
		return text.replace(new RegExp(word || "", "i"), "<span class=\"eq-highlight\">$&</span>");
	},

	save: function(event, model, method) {

		var h1 = $("<h1 />");
		h1.addClass("ui-li-heading");
		h1.text(model.get("Name") || "");

		var p = $("<p />");
		p.addClass("eq-font-mono");
		p.text(model.get("Description") || "");

		var detail = $("#eq-data-detail");
		detail.html("");
		detail.append(h1);
		detail.append(p);

		var apply = $("#eq-data-apply");
		apply.bind("vclick", function(event) {
			$.ajax({
				url			: "/data/save",
				type		: 'GET',
				dataType	: 'json',
				cache		: false,
				data		: $.extend(param, { method: method }),
				success:function(){console.log("success");},
				error:function(xhr, status, e){console.log("error " + e);},
			});
		});

		var web0 = $("#eq-data-websearch0");
		web0.attr("href", web0.attr("eq-attr") + model.get("Name"));

		var web1 = $("#eq-data-websearch1");
		web1.attr("href", web1.attr("eq-attr") + model.get("Name"));
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

var widget = widget || {
	load: function(option) {
		var names = option;
		if ("string" === typeof names) {
			names = [ names ];
		}
		for (var i in names) {
			console.log(names[i]);
			document.write('<script type="text/javascript" src="/js/widget/'+names[i]+'.js"><\/script>');
		}
	},
};

(function($) {
	$.widget("eq.widget", {
		refresh: function() {},
	});
})(jQuery);

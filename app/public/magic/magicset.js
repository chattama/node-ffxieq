widget.load([
	"ListView",
	"MagicSetListView",
]);

$("#magicset").live("pagecreate", function(event) {

	$("#magicsetlistview").MagicSetListView();

	var removefunc = function(event) {
		var data = $.parse($(this).attr("eq-attr"));
		$.ajax({
			url			: "/data/save",
			type		: 'POST',
			dataType	: 'json',
			cache		: false,
			data		: $.extend(true, data, { method: "magicremove" }),
			success		: function() {
				$(location).attr("href", "/magic");
			},
			error		: function() { console.log(arguments) },
		});
		return false;
	};

	$("#remove").bind("vclick", removefunc);
	$("#removeall").bind("vclick", removefunc);

});

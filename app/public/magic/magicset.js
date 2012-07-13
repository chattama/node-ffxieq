widget.load([
	"ListView",
	"MagicSetListView",
]);

$("#magicset").live("pagecreate", function(event) {

	$("#magicsetlistview").MagicSetListView();

	$("#remove").bind("vclick", function(event) {
		console.log($(this).attr("eq-attr"))
/*
		$.ajax({
			url			: "/data/save",
			type		: 'POST',
			dataType	: 'json',
			cache		: false,
			data		: { method: "magicremove" }),
			success		: function() {
				$(location).attr("href", "/magic");
			},
			error		: function() { console.log(arguments) },
		});
*/
	});

	$("#removeall").bind("vclick", function(event) {
		console.log(this)
	});

});

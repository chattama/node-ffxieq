widget.load([
	"ListView",
	"FilterListView",
	"VWAtmaListView",
]);

$("#vwatma").live("pagecreate", function(event) {
	$("#vwatmalistview").VWAtmaListView();
});

$("#filter").live("pagecreate", function(event) {
	$("#filterlistview").FilterListView({
		vclick: function(event, model) {
			var form = $("#filterform");
			$("input[name=filter]", form).val(model.get("Filter"));
			form.submit();
		},
	});
});

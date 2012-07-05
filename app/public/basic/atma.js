widget.load([
	"ListView",
	"FilterListView",
	"AtmaListView",
]);

$("#atma").live("pagecreate", function(event) {
	$("#atmalistview").AtmaListView();
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

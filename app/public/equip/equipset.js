widget.load([
	"ListView",
	"FilterListView",
	"EquipSetListView",
	"EquipTypeListView",
]);

$("#equipset").live("pagecreate", function(event) {
	$("#equipsetlistview").EquipSetListView();
});

$("#type").live("pagecreate", function(event) {
	$("#equiptypelistview").EquipTypeListView();
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

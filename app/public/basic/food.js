widget.load([
	"ListView",
	"FilterListView",
	"FoodListView",
	"FoodTypeListView"
]);

$("#food").live("pagecreate", function(event) {
	$("#foodlistview").FoodListView();
});

$("#type").live("pagecreate", function(event) {
	$("#foodtypelistview").FoodTypeListView();
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

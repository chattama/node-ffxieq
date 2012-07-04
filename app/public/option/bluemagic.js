widget.load([

	"ListView",

	"FilterListView",

	"BlueMagicListView",

]);


$("#bluemagic").live("pagecreate", function(event) {

	$("#bluemagiclistview").BlueMagicListView();

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


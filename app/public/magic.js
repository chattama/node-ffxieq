widget.load([

	"ListView",

	"MagicListView",

]);


$("#magic").live("pagecreate", function(event) {

	$("#magiclistview").MagicListView();

});


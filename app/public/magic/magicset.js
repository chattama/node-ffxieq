widget.load([

	"ListView",

	"MagicSetListView",

]);


$("#magicset").live("pagecreate", function(event) {

	$("#magicsetlistview").MagicSetListView();

});


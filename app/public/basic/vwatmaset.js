widget.load([
	"ListView",
	"VWAtmaSetListView",
]);

$("#vwatmaset").live("pagecreate", function(event) {
	$("#vwatmasetlistview").VWAtmaSetListView();
});

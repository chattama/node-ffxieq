widget.load([
	"ListView",
	"EquipSetListView",
]);

$("#equipset").live("pagecreate", function(event) {
	$("#equipsetlistview").EquipSetListView();
});

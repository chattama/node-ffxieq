$("#option").live("pagecreate", function(event) {
	$("#save-button").bind("vclick", function(event) {
		console.log("save");
		saveSetting(setting);
		//localStorage.ffxisettings = "{}";
	});
});

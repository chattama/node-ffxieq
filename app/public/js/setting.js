localStorage.clear();

var FFXIEQSettings = FFXIEQSettings || {

	SETTING_NAME: "ffxisettings",

	SETTING_DEFAULTS: {
		Characters: [],
		MeritPoints: [],
		Filters: [],
	},

	haveLocalStorage: localStorage ? true : false,

	init: function() {
		var json = localStorage[ FFXIEQSettings.SETTING_NAME ];
		var ret = json ? JSON.parse(json) : FFXIEQSettings.SETTING_DEFAULTS;
		return ret;
	},

	load: function(name) {
	},

	save: function(setting) {
		localStorage[ FFXIEQSettings.SETTING_NAME ] = JSON.stringify(setting);
	},

};

var setting = FFXIEQSettings.init();
//console.log(setting);
//FFXIEQSettings.save(setting);


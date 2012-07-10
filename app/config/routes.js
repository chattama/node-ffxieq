module.exports = function(app) {
	return {

		"/"						: "Home.index",

		"/basic"				: "Basic.index",
		"/basic/food"			: "Basic.food",
		"/basic/atma"			: "Basic.atma",
		"/basic/vwatma"			: "Basic.vwatma",
		"/basic/vwatmaset"		: "Basic.vwatmaset",

		"/equip"				: "Equip.index",
		"/equip/equipset"		: "Equip.equipset",

		"/magic"				: "Magic.index",
		"/magic/magicset"		: "Magic.magicset",

		"/status"				: "Status.index",

		"/option"				: "Option.index",
		"/option/merits"		: "Option.merits",
		"/option/skill"			: "Option.skill",
		"/option/bluemagic"		: "Option.bluemagic",


		"/data/save"			: "Save.save",


		"/data/filter"			: "Data.filter",

		"/data/atma"			: "Data.atma",
		"/data/vwatma"			: "Data.vwatma",
		"/data/vwatmaset"		: "Data.vwatmaset",
		"/data/food"			: "Data.food",
		"/data/foodtype"		: "Data.foodtype",

		"/data/equipset"		: "Data.equipset",
		"/data/equiptype"		: "Data.equiptype",

		"/data/magic"			: "Data.magic",
		"/data/magicset"		: "Data.magicset",
		"/data/magictype"		: "Data.magictype",

		"/data/bluemagic"		: "Data.bluemagic",

	}
}

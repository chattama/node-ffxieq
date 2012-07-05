var R = require("./strings")

var ext = {
	Apply: "決定",
	Menu: "メニュー",
	Etc: "その他",
	Option: "オプション",
	Food: '食事',
};

var map = {
	Jobs: {
		"WAR": "戦",
		"MNK": "モ",
		"WHM": "白",
		"BLM": "黒",
		"RDM": "赤",
		"THF": "シ",
		"PLD": "ナ",
		"DRK": "暗",
		"BST": "獣",
		"BRD": "吟",
		"RNG": "狩",
		"SAM": "侍",
		"NIN": "忍",
		"DRG": "竜",
		"SMN": "召",
		"BLU": "青",
		"COR": "コ",
		"PUP": "か",
		"DNC": "踊",
		"SCH": "学",

		"戦": "WAR",
		"モ": "MNK",
		"白": "WHM",
		"黒": "BLM",
		"赤": "RDM",
		"シ": "THF",
		"ナ": "PLD",
		"暗": "DRK",
		"獣": "BST",
		"吟": "BRD",
		"狩": "RNG",
		"侍": "SAM",
		"忍": "NIN",
		"竜": "DRG",
		"召": "SMN",
		"青": "BLU",
		"コ": "COR",
		"か": "PUP",
		"踊": "DNC",
		"学": "SCH",
	},
};

for (var k in ext)
	R.string[k] = ext[k];

R.map = map;

module.exports = R;

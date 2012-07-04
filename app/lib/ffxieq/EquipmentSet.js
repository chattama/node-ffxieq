var SessionObject = require("../SessionObject"),
	Equipment = require("./Equipment")

module.exports = SessionObject.extend(function() {
	this.Equipments = [];
})

.statics({
	MAINWEAPON: 0,
	SUBWEAPON: 1,
	HEAD: 2,
	BODY: 3,
	HANDS: 4,
	LEGS: 5,
	FEET: 6,
	BACK: 7,
	NECK: 8,
	WAIST: 9,
	RING1: 10,
	RING2: 11,
	EAR1: 12,
	EAR2: 13,
	RANGE: 14,
	ANMO: 15,
	EQUIPMENT_NUM: 16,
})

.methods({
	deserialize: function() {
		this.Equipments = SessionObject.deserialize(this.Equipments, Equipment);
	},
})

var SessionObject = require("../SessionObject"),
	FFXICharacterSet = require("./FFXICharacterSet"),
	FFXICharacter = require("./FFXICharacter"),
	MeritPoint = require("./MeritPoint"),
	R = require("../res/stringsext")

module.exports = SessionObject.extend(function() {
	this.Current = new FFXICharacterSet();
	this.Characters = [];
	this.MeritPoints = [];
	this.Filters = [];
})

.statics({
})

.methods({
	deserialize: function() {
		this.Current = SessionObject.deserialize(this.Current, FFXICharacterSet);
		this.Characters = SessionObject.deserialize(this.Current, FFXICharacterSet);
		this.MeritPoints = SessionObject.deserialize(this.Current, MeritPoint);
	},
})

var SessionObject = require("../SessionObject"),
	FFXICharacter = require("./FFXICharacter"),
	R = require("../res/stringsext")

module.exports = SessionObject.extend(function() {
	this.Id = -1;
	this.Name = R.string.NewCharacterName;
	this.Info = new FFXICharacter();
})

.methods({
	deserialize: function() {
		this.Info = SessionObject.deserialize(this.Info, FFXICharacter);
	},
})

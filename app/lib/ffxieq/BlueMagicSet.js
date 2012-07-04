var SessionObject = require("../SessionObject"),
	BlueMagic = require("./BlueMagic")

module.exports = SessionObject.extend(function() {
	this.Magics = [];
	this.NotNeedParseSetJobTraits = true;
})

.statics({
})

.methods({
	deserialize: function() {
		this.Magics = SessionObject.deserialize(this.Magics, BlueMagic);
	},
})

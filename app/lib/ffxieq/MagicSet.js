var SessionObject = require("../SessionObject"),
	Magic = require("./Magic")

module.exports = SessionObject.extend(function() {
	this.Magics = {};
})

.statics({
})

.methods({

	getMagics: function() {
		return this.Magics;
	},

	addMagic: function(magic) {
		this.Magics[ magic.SubId ] = magic;
	},

	deserialize: function() {
		this.Magics = SessionObject.deserialize(this.Magics, Magic);
	},

})

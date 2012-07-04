var SessionObject = require("../SessionObject"),
	Magic = require("./Magic")

module.exports = SessionObject.extend(function() {
	this.Magics = [];
})

.statics({
})

.methods({
	deserialize: function() {
		this.Magics = SessionObject.deserialize(this.Magics, Magic);
	},
})

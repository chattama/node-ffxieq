var SessionObject = require("../SessionObject"),
	Atma = require("./Atma")

module.exports = SessionObject.extend(function() {
	this.Atma = [];
})

.statics({
})

.methods({
	deserialize: function() {
		this.Atma = SessionObject.deserialize(this.Atma, Atma);
	},
})

var SessionObject = require("../SessionObject"),
	Atma = require("./Atma")

module.exports = SessionObject.extend(function() {
	this.Atma = [];
	this.AbyssiteOfMerit = 0;
	this.AbyssiteOfFurtherance = 0;
})

.statics({
	ATMA_MAX: 3,
})

.methods({
	deserialize: function() {
		this.Atma = SessionObject.deserialize(this.Atma, Atma);
	},
})

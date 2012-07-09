var SessionObject = require("../SessionObject"),
	Atma = require("./Atma")

module.exports = SessionObject.extend(function() {
	this.Atma = [ null, null, null ];
})

.statics({
})

.methods({

	getAtma: function(index) {
		return this.Atma[index];
	},

	setAtma: function(index, atma) {
		this.Atma[index] = atma;
	},

	deserialize: function() {
		this.Atma = SessionObject.deserialize(this.Atma, Atma);
	},

})

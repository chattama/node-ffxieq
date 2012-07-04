var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, level, bp, sp, name, element, weaknessA, weaknessVW, description) {
	this.Id = id;
	this.Level = level;
	this.BP = bp;
	this.SP = sp;
	this.Name = name;
	this.Description = description;
	this.Element = element;
	this.WeaknessA = weaknessA;
	this.WeaknessVW = weaknessVW;
})

.statics({
})

.methods({
})

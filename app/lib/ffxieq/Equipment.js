var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, augId, name, part, weapon, job, race, level, rare, ex, description, augment) {
	this.Id = id;
	this.AugId = augId;
	this.Name = name;
	this.Part = part;
	this.Weapon = weapon;
	this.Job = job;
	this.Race = race;
	this.Level = level;
	this.Rare = rare;
	this.Ex = ex;
	this.Description = description;
	this.Augment = augment;
	this.CombinationID = 0;
})

.statics({
})

.methods({
})

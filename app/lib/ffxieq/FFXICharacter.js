var SessionObject = require("../SessionObject"),
	JobLevelAndRace = require("./JobLevelAndRace"),
	JobAndRace = require("./JobAndRace"),
	EquipmentSet = require("./EquipmentSet"),
	MeritPoint = require("./MeritPoint"),
	AtmaSet = require("./AtmaSet"),
	Food = require("./Food"),
	MagicSet = require("./MagicSet"),
	VWAtmaSet = require("./VWAtmaSet"),
	BlueMagicSet = require("./BlueMagicSet")

module.exports = SessionObject.extend(function() {
	this.Level = new JobLevelAndRace(JobLevelAndRace.Hum, JobLevelAndRace.WAR, JobLevelAndRace.MNK, 99, 49);
	this.JobAndRace = new JobAndRace();
	this.Equipment = new EquipmentSet();
	this.Merits = new MeritPoint();
	this.AtmaSet = new AtmaSet();
	this.Food = null;
	this.MagicSet = new MagicSet();
	this.InAbyssea = false;
	this.VWAtmaSet = new VWAtmaSet();
	this.BlueMagicSet = new BlueMagicSet();
	this.Modified = false;
	this.StatusCacheValid = false;
	this.MeritPointId = -1;
})

.statics({
})

.methods({

	getAtma: function(index) {
		return this.AtmaSet.getAtma(index);
	},

	setAtma: function(index, atma) {
		this.AtmaSet.setAtma(index, atma);
	},

	getVWAtma: function(index) {
		return this.VWAtmaSet.getAtma(index);
	},

	setVWAtma: function(index, atma) {
		this.VWAtmaSet.setAtma(index, atma);
	},

	getFood: function(index) {
		return this.Food;
	},

	setFood: function(index, food) {
		var cId = this.Food ? this.Food.Id : -1;
		var nId = food ? food.Id : -1;
		if (cId == nId)
			return;
		this.Modified = true;
		this.Food = food;
	},

	deserialize: function() {
		this.Level = SessionObject.deserialize(this.Level, JobLevelAndRace);
		this.JobAndRace = SessionObject.deserialize(this.JobAndRace, JobAndRace);
		this.Equipment = SessionObject.deserialize(this.Equipment, EquipmentSet);
		this.Merits = SessionObject.deserialize(this.Merits, MeritPoint);
		this.AtmaSet = SessionObject.deserialize(this.AtmaSet, AtmaSet);
		this.Food = SessionObject.deserialize(this.Food, Food);
		this.MagicSet = SessionObject.deserialize(this.MagicSet, MagicSet);
		this.VWAtmaSet = SessionObject.deserialize(this.VWAtmaSet, VWAtmaSet);
		this.BlueMagicSet = SessionObject.deserialize(this.BlueMagicSet, BlueMagicSet);
	},
})

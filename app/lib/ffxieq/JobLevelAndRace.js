var SessionObject = require("../SessionObject")

// JobAndRace(int race, int job, int subjob, int level, int sublevel)
// JobAndRace(JobAndRace from)
module.exports = SessionObject.extend(function(race, job, subjob, level, sublevel) {
console.log(arguments);
	if (job != undefined) {
		this.Race = race;
		this.Job = job;
		this.SubJob = subjob;
		this.Level = level;
		this.SubLevel = sublevel;
	} else {
		var from = race;
		this.Job = from.Job;
		this.SubJob = from.SubJob;
		this.Level = from.Level;
		this.SubLevel = from.SubLevel;
		this.Race = from.Race;
	}
})

.statics({
	Hum: 0,
	Elv: 1,
	Tar: 2,
	Mit: 3,
	Gal: 4,
	
	WAR: 0,
	MNK: 1,
	WHM: 2,
	BLM: 3,
	RDM: 4,
	THF: 5,
	PLD: 6,
	DRK: 7,
	BST: 8,
	BRD: 9,
	RNG: 10,
	SAM: 11,
	NIN: 12,
	DRG: 13,
	SMN: 14,
	BLU: 15,
	COR: 16,
	PUP: 17,
	DNC: 18,
	SCH: 19,
	JOB_MAX: 20,
})

.methods({
})

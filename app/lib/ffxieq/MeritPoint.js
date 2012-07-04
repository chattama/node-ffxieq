var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function() {
	this.loadDefaultValues();
})

.statics({
	MAX_JOB_SPECIFIC_MERIT_POINT_CATEGORY: 2,
	MAX_JOB_SPECIFIC_MERIT_POINT: 10,
})

.methods({
	loadDefaultValues: function() {
	},
})

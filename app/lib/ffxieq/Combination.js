var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, combinationid, description) {
	this.Id = id;
	this.CombinationID = combinationid;
	this.Description = description;
})

.statics({
})

.methods({
})

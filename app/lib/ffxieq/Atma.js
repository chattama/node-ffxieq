var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, subId, name, description) {
	if (!description) {
		description = name;
		name = subId;
		subId = -1;
	}
	this.Id = id;
	this.SubId = subId;
	this.Name = name;
	this.Description = description;
})

.statics({
})

.methods({
})

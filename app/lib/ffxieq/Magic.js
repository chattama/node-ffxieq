var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, subId, name, description, memo) {
	this.Id = id;
	this.SubId = subId;
	this.Name = name;
	this.Description = description;
	this.Memo = memo;
})

.statics({
})

.methods({
})

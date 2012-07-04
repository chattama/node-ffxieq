var SessionObject = require("../SessionObject")

module.exports = SessionObject.extend(function(id, name, description) {
	this.Id = id;
	this.Name = name;
	this.Description = description;
})

.statics({
})

.methods({
})

var SessionObject = require("../SessionObject"),
	StatusType = require("../ffxi/status/StatusType")

module.exports = SessionObject.extend(function() {
	this.Skills = [];
	this.loadDefaultValues();
})

.statics({
})

.methods({
	loadDefaultValues: function() {
		if (this.Skills.length == 0) {
			var len = Object.keys(StatusType).length;
			for (var i = 0; i < len; i++) {
				this.Skills.push(999);
			}
		} else {
			var len = this.Skills.length;
			var skills = [];
			for (var i = 0; i < len; i++) {
				skills.push(this.Skills[i]);
			}
			this.Skills = skills;
		}
	},
})

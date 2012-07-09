var SessionObject = klass(function() {
})

.methods({
	deserialize: function() {},
})

SessionObject.statics({
	// object to class
	deserialize: function(obj, clazz) {
		if (!obj)
			return obj;
		if (obj instanceof Array) {
			var self = this;
			for (var i in obj)
				obj[i] = SessionObject.deserialize.apply(self, [ obj[i], clazz ]);
		} else {
			if (obj instanceof clazz.constructor)
				return obj;
			obj.__proto__ = clazz.prototype;
			// deserialize chain
			if (obj.deserialize)
				obj.deserialize.apply(obj);
		}
		return obj;
	},
})

module.exports = SessionObject;

var _ = require("underscore")
var R = require("../lib/res/stringsext")
var SessionObject = require("../lib/SessionObject")
var FFXIEQSettings = require("../lib/ffxieq/FFXIEQSettings")
var FFXICharacter = require("../lib/ffxieq/FFXICharacter")

module.exports = function(app, config) {

	var DB_NAME = "ffxisettings";
	var MAX_FILTERS = 16;

	return app.getModel('Base', true).extend(function() {
	})

	.methods({

		get: function(session) {
			var setting = session[DB_NAME];
			if (setting) {
				setting = SessionObject.deserialize(setting, FFXIEQSettings);
			} else {
				setting = new FFXIEQSettings();
			}
			session[DB_NAME] = setting;
			return setting;
		},

		set: function(session, setting) {
			session[DB_NAME] = setting;
		},

		getCurrentCharacterSet: function(session) {
			var setting = this.get(session);
			return setting.Current;
		},

		setCurrentCharacterSet: function(session, data) {
			var setting = this.get(session);
			setting.Current = data;
		},

		getCharacterSet: function(session) {
		},

		setCharacterSet: function(session, data) {
		},

		addFilter: function(session, filter) {

			if (!filter) return;

			var setting = this.get(session);
			var docs = _.defaults([], setting.Filters);

			docs = _.reject(docs, function(doc) {
				return (doc.Filter == filter);
			});

			var last = _.max(docs, function(doc) { return doc._id || 0; });
			var nextId = last ? last._id + 1 : 0;

			docs.push({
				_id: nextId,
				Filter: filter,
				LastUsed: Date.now()
			});

			docs = _.sortBy(docs, function(doc) {
				return doc.LastUsed;
			}).reverse();

			docs = _.first(docs, MAX_FILTERS);

			setting.Filters = docs;

			this.set(session, setting);
		},
	})

	.statics({
	})
}

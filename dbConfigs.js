var MongoClient = require("mongodb").MongoClient;
var _db = {};
module.exports = {
	connect: function (mongodbObj) {
		return MongoClient.connect(mongodbObj, {promiseLibrary: require('bluebird')})
			.then(function (db) {
				_db = db;
			})
	},
	getDB: function () {
		return _db;
	}
};

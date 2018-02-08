var DBConfigs = require('../dbConfigs');
var DB = DBConfigs.getDB();
exports.testDataAccess = function (filters) {
	return DB.collection("records").aggregate([
		{
			$match: {
				createdAt : {$gte : filters.startDate, $lte : filters.endDate}
			}
		},
		{
			$project: {
				key: "$key",
				createdAt: "$createdAt",
				totalCount: {$sum : "$counts"}
			}
		},
		{
			$match : {
				totalCount : {$gte :filters.minCount, $lte : filters.maxCount}
			}
		}
	]).toArray()
};

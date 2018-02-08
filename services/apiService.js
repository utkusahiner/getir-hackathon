const ApiDataAccess = require("../dataAccess/apiDataAccess");
exports.searchRecordService = function (params) {
	let filters = {
		minCount: params.minCount,
		maxCount: params.maxCount,
		startDate : new Date(params.startDate),
		endDate : new Date(params.endDate)
	};
	try{
		filters.startDate = new Date(params.startDate);
		filters.endDate = new Date(params.endDate);
	}
	catch(err){
		return {
			code : -1,
			msg: "Error with date parameters"
		}
	}
	return ApiDataAccess.testDataAccess(filters)
		.then(function (results) {
			results.forEach(function (item) {
				delete item._id
			});
			return {
				code : 0,
				msg: "Success",
				records: results
			}
		})
};
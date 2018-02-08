var	ApiService = require('../services/apiService');
exports.searchRecordController = function (req, res, next) {
	return ApiService.searchRecordService(req.params)
		.then(function (result) {
			res.send(200, result)
		})
		.catch(function (err) {
			res.send(200,{
				code : -2,
				msg: "Error Occurred"
			})
		})
};

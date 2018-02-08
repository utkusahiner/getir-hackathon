"use strict";
var ApiController = require("../controllers/apiController");
module.exports = function (server) {
	server.post("/searchRecord", ApiController.searchRecordController);
};
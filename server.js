const DBConfigs = require('./dbConfigs'),
	config = require("./config"),
	restify = require('restify');
const server = restify.createServer({
	handleUncaughtExceptions: true
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({mapParams: true}));
server.use(restify.plugins.jsonp());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser({mapParams: true}));
const port = process.env.PORT || 9999;
DBConfigs.connect(config().mongoDb)
	.then(function () {
		require('./routers/apiRouter')(server);
		server.listen(port, function () {});
	})
	.catch(function (err) {
		console.log("connectErr", JSON.stringify(err));
		throw err;
	});


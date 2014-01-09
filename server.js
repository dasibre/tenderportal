var http = require("http"); //require node http module object
var url  = require("url"); //require url module object


function start(route) { //start server function

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var querystrings = url.parse(request.url).query;
		console.log("Request for " + pathname + querystrings + " received");

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello world");
		response.end();
	}
	http.createServer(onRequest).listen(8888); //call createServer method on http object with onRequest callback function
	console.log("server has started");
}
exports.start = start;

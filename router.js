function route(handle,pathname,response) {
	console.log("About to route to " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response); //executes request
	} else {
		console.log("No request found for " + pathname);
		response.writeHead(404,{"Content-TYpe": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route = route;
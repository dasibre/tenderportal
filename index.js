var server = require("./server"),
  	router = require("./router"),
	formidable = require('formidable'),
	sys  = require('sys'),
    requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"]       = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/favicon.ico"] = requestHandlers.favicon
server.start(router.route, handle);
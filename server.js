var http = require("http");
var url  = require("url")

function start(route, handle) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		route(handle,pathname,response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;
// var formidable = require('formidable'),
// 	http = require('http'),
// 	sys  = require('sys');

// http.createServer(function(req,res){
// 	if(req.url == '/upload' && req.method.toLowerCase()== 'post'){
// 		var form = new formidable.IncomingForm();
// 		form.parse(req, function(error, fields, files){
// 			res.writeHead(200, {"Content-Type": "text/plain"});
// 			res.write("received upload:\n\n");
// 			res.end(sys.inspect({fields: fields, files: files}));
// 		});
// 		return;
// 	}

// 	res.writeHead(200, {"Content-Type": "text/html"});
// 	res.end('<form action="/upload" enctype="multipart/form-data" '+ 'method="post"> '+
//   			'<input type="file" name="file" id="file"></br>'+
//   			'<input type="submit" name="submit" value="Upload">'+
//   			'</form>');
// }).listen(8888)
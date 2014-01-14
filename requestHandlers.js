var exec = require("child_process").exec,
    formidable = require('formidable'),
	sys  = require('sys');

function start(response) {
	console.log("Request handler 'start' was called. ");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Tender Portal");
		response.end();

	// exec("ls -lah", function(error, stdout, stderr){
	// 	response.writeHead(200, {"Content-Type": "text/plain"});
	// 	response.write(stdout);
	// 	response.end();
	// });
}

function upload(response) {
	console.log("Request handler 'upload' was called. ");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end('<form action="/upload" enctype="multipart/form-data" '+ 'method="post"> '+
  			'<input type="file" name="file" id="file"></br>'+
  			'<input type="submit" name="submit" value="Upload">'+
  			'</form>');
}

exports.upload = upload;
exports.start = start;

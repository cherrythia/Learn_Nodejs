var http = require('http');
var fs = require('fs');

//request is request from the client
//response is return to client
/*
function onRequest(request , response) {
	console.log("A user made a request " + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is some data");
	response.end();
}
*/
//http.createServer(onRequest/*function to run*/).listen(8888/*listener to port*/);
//console.log("server is now running");

//404 response
function send404Message(response) {
	response.writeHead(404, {"Content-Type":"text/plain"});
	response.write("Error 404: Page not found");
	response.end();
}

//handle a user requst
function onRequest(request , response) {
	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);
	} else {
		send404Message(response);
	}
}


http.createServer(onRequest/*function to run*/).listen(8888/*listener to port*/);
console.log("server is now running");
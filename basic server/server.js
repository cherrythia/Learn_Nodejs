var http = require('http');

//request is request from the client
//response is return to client
function onRequest(request , response) {
	console.log("A user made a request " + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is some data");
	response.end();
}

http.createServer(onRequest/*function to run*/).listen(8888/*listener to port*/);
console.log("server is now running");
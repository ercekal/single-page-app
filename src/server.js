var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "src");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });

server.listen(3000);
console.log(__dirname, "");
console.log("Server running at port 3000, Ctrl-C to stop listening");

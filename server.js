var httpServer = require("http-server");
var path = require("path");

var filePath = path.join(__dirname, "");
var server = httpServer.createServer({ root: filePath });

server.listen(3000);
console.log(__dirname, "");
console.log("Server running at port 3000, Ctrl-C to stop listening");

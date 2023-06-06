const http = require("http");
const PORT = 3000;

http.createServer(function (req,res) {
	res.write("On the way to being a full stack engineer!");
	res.end();
}).listen(PORT);

console.log(`Running on port ${PORT}`)

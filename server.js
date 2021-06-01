const http = require('http');
const staticServer = require('node-static');

const contentPath = './build';
const file = new staticServer.Server(contentPath);

http.createServer(function(req, res) {
    console.log(`Request URL: ${req.url}`);
    file.serve(req, res);
}).listen(9020, () => {
    console.log(`Serving files from ${contentPath}`);
});

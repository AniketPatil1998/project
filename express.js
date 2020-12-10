var http = require('http');
var fs = require('fs');
var qstring = require('querystring');
var url = require('url');

function process_request(req, res) {
    var p = url.parse(req.url);
    if (p.pathname == "/") {
        res.end("Welcome to Node js");
    }
}

var ser = http.createServer(process_request);
ser.listen(5000, function() {
    console.log("server started on port 5000");
});
const http = require('http');
const url = require('url');

start = (route, handle) => {
  onRequest = (req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received');
    route(handle, pathname, res, req);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}

exports.start = start;

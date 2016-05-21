var exec = require('child_process').exec;

start = (res) => {
  console.log("Request handler 'start' was called.");

  exec('ls-lah', (err, stdout, stderr) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(stdout);
    res.end();
  });
}
upload = (res) => {
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Upload');
  res.end();
}

exports.start = start;
exports.upload = upload;

const exec = require('child_process').exec;

start = () => {
  console.log("Request handler 'start' was called.");
  var content = 'empty';

  exec('find /', (err, stdout,stderr) => {
    content = stdout;
  });

  return content;
}

upload = () => {
  console.log("Request handler 'upload' was called.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;

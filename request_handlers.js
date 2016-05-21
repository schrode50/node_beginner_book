const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

start = (res) => {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  // exec('ls-lah', (err, stdout, stderr) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
  // });
}
upload = (res, req) => {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(req, (err, fields, files) => {
    console.log('parsing done');

    fs.rename(files.upload.path, "./tmp/test.png", (err) => {
      if(err) {
        fs.unlink('./tmp/test.png');
        fs.rename(files.upload.path, './tmp/test.png');
      }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("received image:<br/>");
    res.write("<img src='/show' />");
    res.end();
  });
}

show = (res) => {
  console.log("Request handler 'show' was called");
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('./tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

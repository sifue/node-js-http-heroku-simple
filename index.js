var http = require('http');
var port = process.env.PORT || 5000;
var accessCount = 0;
var server = http.createServer(function (req, res) {
  switch (req.method) {
    case 'GET':
      if (req.url === '/') {
        accessCount++;
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'charset': 'utf-8'
        });
        res.write('<h3>あなたが' + accessCount + '回目の訪問者です。</h3>');
        res.end();
      }
      break;
  }
});
server.on('error', function (e) {
  console.log('Server Error', e);
});
server.on('clientError', function (e) {
  console.log('Client Error', e);
});
server.listen(port, function () {
  console.log('listening on ' + port);
});
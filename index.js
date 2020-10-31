var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer( (req, res) => {

  var pageInfo = url.parse(req.url)
  let fileName = (pageInfo.pathname =='./') ? 'index.html'
                  :(pageInfo.pathname =='./') ? 'about.html'
                  :(pageInfo.pathname =='./') ? 'contact-me.html'
                  : '404.html'
  fs.readFile(fileName, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('data');
      return res.end() 
  })
}).listen(2060);
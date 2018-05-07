var http = require('http');
var fs = require('fs');
var path = require('path');
var data = require('./public/json/Orders')

var server = http.createServer(function(request, response) {

  console.log(`${request.method} Request for ${request.url}`);

  if(request.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      if(err) throw err;

      response.writeHead(200, {"Content-Type" : "text/html"});
      response.end(html);
    });
  } else if(request.url.match(/.css$/)) {

    var cssPath = path.join(__dirname, 'public', request.url);
    var cssStream = fs.createReadStream(cssPath, "UTF-8");
    response.writeHead(200, {"Content-Type" : "text/css"});
    cssStream.pipe(response);

  } else if(request.url.match(/.js$/)) {

    var jsPath = path.join(__dirname, 'public', request.url);
    var jsStream = fs.createReadStream(jsPath, "UTF-8");
    response.writeHead(200, {"Content-Type" : "text/javascript"});
    jsStream.pipe(response);

  } else if(request.url.match(/.jpg$/)) {

    var imgPath = path.join(__dirname, 'public', request.url);
    var imgStream = fs.createReadStream(imgPath);
    response.writeHead(200, {"Content-Type" : "image/jpeg"});
    imgStream.pipe(response);

  } else if(request.url.toLowerCase() === "/instock") {
    response.writeHead(200, {"Content-Type" : "text/json"});
    listInStock(response);
  } else if(request.url.toLowerCase() == "/onorder") {
    response.writeHead(200, {"Content-Type" : "text/json"});
    listOnOrder(response);
  } else {

    fs.readFile("./public/404.html", "UTF-8", function(err, err404) {
      if(err) throw `Error at : ${err}`;

      response.writeHead(404, {"Content-Type" : "text/html"});
      response.end(err404);
    });
  }
});

function listInStock(response) {
  var instock = data.filter(function(item) {
    return item.Avail === "In Stock";
  });

  response.end(JSON.stringify(instock));
}

function listOnOrder(response) {
  var backorder = data.filter(function(item) {
    return item.Avail === "Back Order";
  });

  response.end(JSON.stringify(backorder));
}

server.listen(3000);

console.log("Server stated on port : 3000");

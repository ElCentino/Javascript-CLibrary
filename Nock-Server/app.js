
var nock = require('nock');
var https = require('https');

var nockServer = nock("https://www.elcentino.com");

nockServer.get("/index").reply(200, "This is the index page");
nockServer.get("/users").reply(200, "This is the users page");

var page = "users";

https.get(`https://www.elcentino.com/${page}`, function(res) {

    console.log(`Status code ${res.statusCode}`);
    console.log(`Headers ${res.headers}`);
    console.log(`Path ${res.path}`);

    var body = "";

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      console.log(body);
      console.log(`done`);
    })
});

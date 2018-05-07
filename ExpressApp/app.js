var express = require('./node_modules/express/lib/express');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var user = [
];

var user_obj = {
  name : "",
  user_name : "",
  email: "",
  password : ""
}

var users = fs.createReadStream("./users.json", "UTF-8");

var usersTable = "";

users.on('data', chunk => {
  usersTable += chunk;
});

users.on('end', () => {
  var person = JSON.parse(usersTable);

  for(p of person) {
    user.push(p);
  }
  console.log(JSON.stringify(user));
});

app.use(function(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use(cors());

app.get("/signup", function(req, res) {
  fs.createReadStream("./public/signup.html", "UTF-8").pipe(res);
});

app.get("/login", (req, res) => {
  fs.createReadStream("./public/login.html", "UTF-8").pipe(res);
});

app.get("/users", (req, res) => {
  fs.createReadStream("./users.json", "UTF-8").pipe(res);
});

app.get("/registered", (req, res) => {
  res.end("You are now registered");
});

app.post("/users", (req, res) => {

  user_obj.name = req.body.fullName;
  user_obj.user_name = req.body.username;
  user_obj.email = req.body.email;
  user_obj.password = req.body.password;

  user.push(user_obj);

  console.log(req.body);

  fs.createWriteStream("./users.json").write(JSON.stringify(user));
  res.end("You are now registered");
});

app.listen(4000);

console.log("Express app started on port : 3000");
module.exports = app;

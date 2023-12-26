var fs = require("fs");
var https = require("https");
var http = require("http");
var privateKey = fs.readFileSync(__dirname + "/certs/key.pem", "utf8");
var certificate = fs.readFileSync(__dirname + "/certs/cert.pem", "utf8");

var credentials = { key: privateKey, cert: certificate };

var express = require("express");

var app = express();

// your express configuration here
var credentials = https.createServer(credentials, function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/console", (req, res) => {
  res.sendFile(__dirname + "/console.html");
});

app.get("/map", (req, res) => {
  res.sendFile(__dirname + "/map.html");
});

// var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var httpServer = http.createServer(app);

// httpServer.listen(8080);
httpsServer.listen(443);
httpServer.listen(80);

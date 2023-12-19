const http = require('http');
const cmdinput = require('minimist')(process.argv.slice(2));
const file = require("fs");

const pages = {
  "/project": "project.html",
  "/registration": "registration.html",
  "/": "home.html", // Default page
};

const datacontrol = (req, res) => {
  const filename = pages[req.url] || pages["/"]; // Fallback to default
  const stream = file.createReadStream(filename);
  stream.pipe(res);
};

http.createServer(datacontrol).listen(cmdinput.port);

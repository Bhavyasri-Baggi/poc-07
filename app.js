const http = require('http');

http.createServer((req, res) => {
  res.write("CI/CD Single EC2 Success!");
  res.end();
}).listen(3000);

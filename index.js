
require('http').createServer((req, res) => res.end(`hello world ${Date.now()}`)).listen(3000);

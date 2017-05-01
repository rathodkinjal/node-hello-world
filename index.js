
const rand = Math.random().toString().substr(2, 8);
require('http').createServer((req, res) => res.end(`hello new world ${rand} ${Date.now()}`)).listen(3000);



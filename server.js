require('gun/axe');
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const Gun = require('gun');

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const nextApp = next({ dev, hostname, port })
const handle = nextApp.getRequestHandler()


nextApp.prepare().then(() => {
  const app = express();
  app.use(Gun.serve);
  app.use(express.static('/gun'));
  
  app.all("*", (req, res) => {
    return handle(req, res);
  });
  var server = app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
  });
  
  var gun = Gun({	file: 'data', web: server });
})
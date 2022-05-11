import express, { Request, Response } from "express";
import next from "next";

require('gun/axe');
const Gun = require('gun');

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await nextApp.prepare();
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
    // @ts-ignore
    global.Gun = Gun; /// make global to `node --inspect` - debug only
    // @ts-ignore
    global.gun = gun; /// make global to `node --inspect` - debug only
    console.log('Server started on port ' + port + ' with /gun');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
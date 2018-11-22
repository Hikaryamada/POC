const express = require('express')
const app = express()
const port = 3030

class ServerExpress {
  connection(port) {
    app.listen(port, function () {
      console.log(`app listening on port ${port}`);
    });
  }
}

module.exports = ServerExpress;

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });





const express = require('express')
const app = express()
const bodyParser = require('body-parser')

class ServerExpress {
  connection(port, routes) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', routes);


    app.listen(port, function () {
      console.log(`app listening on port ${port}`);
    });


  }
}
module.exports = ServerExpress;

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });





const express = require('express')
const app = express()

const port = 4000

app.listen(port, function() {
    console.log('foi')
})

app.get('/', function (req, res) {
    res.send('home')
})

app.get('/teste', function (req, res) {
    res.send('teste');
  })
  
  
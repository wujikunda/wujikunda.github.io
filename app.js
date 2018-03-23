var express = require('express')
var port = 9020
var app = express()

app.use(express.static('./'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('bae server')
  console.log('Listening at http://localhost:' + port + '\n')
})
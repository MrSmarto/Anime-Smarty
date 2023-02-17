const express = require('express')

const app = express();

app.get('/', onhome)
  .listen(1900)

app.use('/static',express.static('public'));

function onhome(req, res) {
  res.send('<h1>Hello Client</h1>')
}

const express = require('express')
const app = express();
const port = 1900;

app.get('/', onhome)
  .listen(1900)

app.use('/public',express.static('public'));

app.get((req, res, next) => {
  res.status(404).send('Resource not found');
});

function onhome(req, res) {
  res.send('<h1>Hello Client</h1>')
}


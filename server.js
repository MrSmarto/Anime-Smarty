const express = require('express')
const app = express();

app.use((req, res, next) => {
  res.status(404).send('<h1>DEZE PAGINA BESTAAT NIET</h1>');
});

app.get('/home', onhome)
  .listen(1900)

app.use('/public',express.static('public'));

function onhome(req, res) {
  res.send('<h1>Hello Client</h1>')
}

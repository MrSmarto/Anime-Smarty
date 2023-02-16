const express = require('express');
const app = express();

app.get('/', onHome).listen(420, console.log('Running on port: ${PORT}'));

function onHome(req, res) {
  res.send('hallo')
}
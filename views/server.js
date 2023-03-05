const express = require('express')
const app = express();
const port = 1900;


app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
  res.render('index.ejs');
});

app.use(function(req, res) {
  res.status(404).render('404', {path:'Error'});
});

app.get("/liked", (req, res) => {
  res.render("liked");
});

app.listen(port, () => {

});

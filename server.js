const express = require('express')
const app = express();
const port = 1900;
const films = [ 
  { name: 'naruto', genre: 'rustig' },
  { name: 'one piece', genre: 'romantiek' }, 
  { name: 'dragonball', genre: 'sad' }
];

//midlewear


//connection naar MongoDB


//Routes


//server configurations

app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
  res.render("index.ejs", { films });
});

app.get('/detailspagina',(req, res) => {
  res.render("detailspagina.ejs");
});

app.use(function(req, res) {
  res.status(404).render('404', {path:'Error'});
});

app.get("/liked", (req, res) => {
  res.render("liked");
});

app.listen(port, () => console.log("Server is gestart op port: 1900"));


// Require DEPENDENCIES

const express = require('express')
const ejs = require('ejs');
const app = express();
const port = 1900;
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');


//midlewear

app.use("/public", express.static('public'));
app.set('view engine', 'ejs');
dotenv.config(); // Laad de data van de .env bestand

//connection naar MongoDB

let db = null;
  

//Routes

app.get('/',(req, res) => {
  res.locals.title = "ANIME SMARTO"
  res.locals.css = "./public/css/index.css"
  res.render("index.ejs");
});

app.get('/detailspagina',(req, res) => {
  res.locals.title = "Detailpagina"
  res.locals.css = "./public/css/detailpagina.css"
  res.render("detailspagina.ejs");
});

app.get('/account',(req, res) => {
  res.locals.title = "Account"
  res.locals.css = "./public/css/account.css"
  res.render("account.ejs");
});

app.use(function(req, res) {
  res.locals.title = "Error 404"
  res.locals.css = "";
  res.status(404).render('404', {path:'Error'});
});

// Verbinding maken met de MongoDB-database
// Make connection with Mongo
async function connectDB() {
  console.log('connecting')
  const uri = 'mongodb+srv://Thijmen:Asvdedijk1@databasethijmen.qtu3hie.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  try {
    console.log('awaiting connect');
      await client.connect();
      console.log('connected!')
      db = client.db('ProjectTECH');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//server configurations
app.listen(port, async () => {
  console.log('Server started on port 1900');
  let databaseConnection = await connectDB();
  let theData = await db.collection('Datafilms').find({}).toArray();
  console.log(theData);
});

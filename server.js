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

//Routes 

//homepagina 

 // Haal de films op uit de database
app.get('/', async (req, res) => {
  const data = await db.collection('Datafilms').find().toArray();
  console.log('@@-- data', data)

  // Geef de films door aan de index pagina om weer te geven
  res.render('index.ejs', {

    title: 'ANIME SMARTO',
    css: './public/css/index.css',
    films: data,
    id: data
  });
  // });
});

//detailpagina 

app.get('/detailspagina', async (req, res) => {
  try {
    // haal de index van de film uit de URL parameters
    const filmIndex = req.query.id;
    console.log(filmIndex);

    // gebruik de index om de bijbehorende filmgegevens op te halen uit de database
    const data = await db.collection('Datafilms').findOne({ id: filmIndex });
    console.log(data);

    // controleer of er resultaten zijn gevonden voor de opgegeven index
    if (!data) {
      // toon een foutmelding als er geen resultaten zijn gevonden
      res.status(404).send('Anime not found');
      return;
    }

    // stuur de filmgegevens mee naar de detailspagina
    res.render("detailspagina.ejs", { film: data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Er is een fout opgetreden bij het ophalen van de gegevens');
  }
});




// app.get('/detailspagina', async (req, res) => {
//   try {
//     // haal de ID uit de URL parameters
//     const animeId = req.query.id;
//     console.log(animeId);
//     // gebruik de ID om de bijbehorende filmgegevens op te halen uit de database
//     const data = await db.collection('Datafilms').find({ id: animeId });
//     console.log(data);
//     // stuur de filmgegevens mee naar de detailspagina
//     res.render("detailspagina.ejs", { film: data, id : data });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Er is een fout opgetreden bij het ophalen van de gegevens');
//   }
// });



//acountpagina 

app.get('/account', (req, res) => {
  res.locals.title = "Account"
  res.locals.css = "./public/css/account.css"
  res.render("account.ejs");
});

//Error  

app.use(function (req, res) {
  res.locals.title = "Error 404"
  res.locals.css = "";
  res.status(404).render('404', {
    path: 'Error'
  });
});

//connection naar MongoDB
let db = null;

// Verbinding maken met de MongoDB-database
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
// Require DEPENDENCIES

const express = require('express')
const ejs = require('ejs');
const app = express();
const port = 1900;
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


//midlewear

app.use("/public", express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/detailspagina/:id', async (req, res) => {
  try {
    // haal het ID uit de URL parameters
    const filmID = parseInt(req.params.id);

    // controleer of de filmID een getal is
    if (isNaN(filmID)) {
      res.status(400).send('Invalid ID');
      return;
    }

    // gebruik het ID om de bijbehorende filmgegevens op te halen uit de database
    const data = await db.collection('Datafilms').findOne({ id: filmID });

    // controleer of er resultaten zijn gevonden voor het opgegeven filmID
    if (!data) {
      // toon een foutmelding als er geen resultaten zijn gevonden
      res.status(404).send('Film not found');
      return;
    }

    // stuur de filmgegevens mee naar de detailspagina
    res.render("detailspagina.ejs", { film: data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Er is een fout opgetreden bij het ophalen van de gegevens');
  }
});

// Pagina voor account

// Haal de opgeslagen films op uit de database en render de accountpagina met de opgeslagen films.
app.get('/account', async (req, res) => {
  try {
    // Haal alle opgeslagen films op uit de "savedFilms" collectie
    const savedFilms = await db.collection('savedFilms').find().toArray();

    // Geef de opgeslagen films door aan de account pagina om weer te geven
    res.render('account.ejs', {
      title: 'ANIME SMARTO - Account',
      css: './public/css/account.css',
      savedFilms: savedFilms
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Er is een fout opgetreden bij het ophalen van de gegevens');
  }
});

// De routes voor de opgeslagen films

// Deze route voegt een film toe aan de opgeslagen films in de database.
app.post('/savedFilms', async (req, res) => {
  try {
    // haal het filmID op uit het POST verzoek
    const filmID = parseInt(req.body.filmId);

    // controleer of de filmID een getal is
    if (isNaN(filmID)) {
      res.status(400).send('Invalid ID');
      return;
    }

    // controleer of de film al is opgeslagen
    const savedFilm = await db.collection('savedFilms').findOne({ id: filmID });
    if (savedFilm) {
      // de film is al opgeslagen, stuur de gebruiker direct door naar de accountpagina
      res.redirect('/account');
      return;
    }

    // de film is nog niet opgeslagen, sla deze op
    const film = await db.collection('Datafilms').findOne({ id: filmID });
    await db.collection('savedFilms').insertOne(film);

    // stuur de gebruiker door naar de accountpagina
    res.redirect('/account');
  } catch (error) {
    console.error(error);
    res.status(500).send('Er is een fout opgetreden bij het opslaan van de film');
  }
});

// De routes om de opgeslagen films te verwijderen

app.post('/deleteSavedFilm', async (req, res) => {
  try {
    // Haal het ID van de te verwijderen film op uit de POST request
    const filmId = parseInt(req.body.filmId);

    // Verwijder de film met het opgegeven ID uit de "savedFilms" collectie
    const result = await db.collection('savedFilms').deleteOne({ id: filmId });
    if (result.deletedCount === 0) {
      res.status(404).send('Film niet gevonden');
      return;
    }

    // Redirect terug naar de accountpagina
    res.redirect('/account');
  } catch (error) {
    console.error(error);
    res.status(500).send('Er is een fout opgetreden bij het verwijderen van de film');
  }
});


//Error  

app.use(function (req, res) {
  res.locals.title = "Error 404"
  res.locals.css = "";
  res.status(404).render('404', {
    path: 'Error'
  });
});


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
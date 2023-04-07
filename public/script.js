// BUTTON geeft aan dat je er op hebt geklikt.

// selecteer de knop
const button = document.querySelector('button');

// voeg een event listener toe voor het "click" event
button.addEventListener('click', function() {

// verander de tekst van de knop naar "Geklikt!"
button.textContent = 'Geklikt!';
});




// API

function fetchDataFromApi() {
  // Selecteer de h1, h2 en h3 elementen binnen deze functie
  const h1 = document.querySelector("main section:nth-of-type(3) h1");
  const h2 = document.querySelector("main section:nth-of-type(3) h2");
  const h3 = document.querySelector("main section:nth-of-type(3) h3");

  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      h1.innerHTML = data.anime;
      h2.innerHTML = data.character;
      h3.innerHTML = data.quote;
    });
}




// AFBEELDINGEN INLADEN | Intersection Observer API TEST
  
document.addEventListener('DOMContentLoaded', function() {

  // Maak een functie om de observer callback uit te voeren
  // observer: de observer zelf
  // entries: de geobserveerde elementen
  function lazyLoadImagesCallback(entries, observer) {
    entries.forEach(entry => { // voor elk geobserveerd element
      if (entry.isIntersecting) { // als het element zichtbaar is in de viewport
        const img = entry.target; // krijg het afbeeldingselement
        console.log('Afbeelding zichtbaar in viewport:', img); // log het afbeeldingselement dat zichtbaar is in de viewport
        img.src = img.dataset.src; // zet de afbeeldingsbron van het data-src attribuut
        console.log('Afbeeldingsbron ingesteld op:', img.src); // log de nieuwe afbeeldingsbron
        observer.unobserve(img); // stop met het observeren van dit afbeeldingselement
        console.log('Observeren gestopt voor afbeelding:', img); // log het afbeeldingselement waarvoor het observeren is gestopt
      }
    });
  }

  // Maak een nieuwe IntersectionObserver instance
  const lazyLoadObserver = new IntersectionObserver(lazyLoadImagesCallback, { rootMargin: '100px' });

  // Selecteer alle afbeeldingen met de .lazy-image class
  const lazyImages = document.querySelectorAll('.lazy-image');

  // Voeg elk afbeeldingselement toe aan de observer
  lazyImages.forEach(image => {
    lazyLoadObserver.observe(image);
    console.log('Afbeelding toegevoegd aan observer:', image); // log het afbeeldingselement dat is toegevoegd aan de observer
  });
});




// VIDEO | Intersection Observer API TEST

document.addEventListener("DOMContentLoaded", function () {
  // Vind de video op de pagina
  const video = document.querySelector("main .promovideo video");

  // Functie om het observeren van de video te initialiseren
  function initObserver() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Zichtbaarheid drempel om te bepalen of de video moet worden afgespeeld of gepauzeerd
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
          console.log("Video is zichtbaar en wordt afgespeeld.");
        } else {
          video.pause();
          console.log("Video is niet zichtbaar en wordt gepauzeerd.");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(video);
  }

  // Initialiseer de Intersection Observer
  initObserver();
});




// API anichan | met API Intersection Observer API TEST

let dataInterval;

function clearData() {
  // Voeg hier de logica toe om de data op het scherm te verwijderen
}

function initApiSectionObserver() {
  // Selecteer de API-sectie in de DOM
  const apiSection = document.querySelector("main section:nth-of-type(3)");

  // Definieer de opties voor de Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Definieer de callback-functie voor de Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Log een bericht wanneer de API-sectie zichtbaar is
        console.log("ANIME QUOTES API is zichtbaar in de viewport.");

        if (!dataInterval) {
          // Haal de data op van de API
          fetchDataFromApi();

          // Start het interval om elke 7 seconden nieuwe data op te halen
          dataInterval = setInterval(() => {
            // Log een bericht wanneer er nieuwe data wordt opgehaald
            console.log("Nieuwe ANIME QUOTES ophalen...");

            // Haal de data op van de API
            fetchDataFromApi();
          }, 7000);
        }
      } else {
        // Log een bericht wanneer de API-sectie niet zichtbaar is
        console.log("ANIME QUOTES API is niet zichtbaar in de viewport.");

        // Stop het interval om nieuwe data op te halen
        clearInterval(dataInterval);
        dataInterval = null;
      }
    });
  };

  // Maak een nieuwe Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Begin met het observeren van de API-sectie
  observer.observe(apiSection);
}


document.addEventListener("DOMContentLoaded", function () {
  // Initialiseer de Intersection Observer
  initApiSectionObserver();
});


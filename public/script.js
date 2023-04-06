// BUTTON geeft aan dat je er op hebt geklikt.

// selecteer de knop
const button = document.querySelector('button');

// voeg een event listener toe voor het "click" event
button.addEventListener('click', function() {

// verander de tekst van de knop naar "Geklikt!"
button.textContent = 'Geklikt!';
});

// API

const h1 = document.querySelector('section:nth-of-type(3) h1');
const h2 = document.querySelector('section:nth-of-type(3) h2');
const h3 = document.querySelector('section:nth-of-type(3) h3');

fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
  console.log(data);
  h1.innerHTML = data.anime;
  h2.innerHTML = data.character;
  h3.innerHTML = data.quote;
})

  // AFBEELDINGEN INLADEN
  
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

// VIDEO
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

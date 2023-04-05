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


document.addEventListener('DOMContentLoaded', function() {
  // LUI LADEN VAN AFBEELDINGEN

  // Maak een functie om de observer callback uit te voeren
  // observer: de observer zelf
  // entries: de geobserveerde elementen
  function lazyLoadImagesCallback(entries, observer) {
    entries.forEach(entry => { // voor elk geobserveerd element
      if (entry.isIntersecting) { // als het element zichtbaar is in de viewport
        const img = entry.target; // krijg het afbeeldingselement
        img.src = img.dataset.src; // zet de afbeeldingsbron van het data-src attribuut
        observer.unobserve(img); // stop met het observeren van dit afbeeldingselement
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
  });
});

// ANIMATIE BIJ HET NAAR BENEDEN SCROLLEN

// Maak een functie om de observer callback uit te voeren voor scroll-animaties
// observer: de observer zelf
// entries: de geobserveerde elementen
function scrollAnimationCallback(entries, observer) {
  entries.forEach(entry => { // voor elk geobserveerd element
    const animatedElement = entry.target; // krijg het element dat geanimeerd moet worden
    
    // Update animatieduur op basis van de intersectionRatio
    const animationDuration = entry.intersectionRatio * 1.5;
    animatedElement.style.animationDuration = `${animationDuration}s`;

    if (entry.isIntersecting) { // als het element zichtbaar is in de viewport
      animatedElement.classList.add('start-animation'); // voeg de start-animation klasse toe
    } else {
      animatedElement.classList.remove('start-animation'); // verwijder de start-animation klasse als het element niet meer zichtbaar is
    }
  });
}

// Maak een nieuwe IntersectionObserver instance voor scroll-animaties
const scrollAnimationObserver = new IntersectionObserver(scrollAnimationCallback, { threshold: 0.1 });

// Selecteer alle elementen met de .scroll-animation class
const scrollAnimationElements = document.querySelectorAll('.scroll-animation');

// Voeg elk geanimeerd element toe aan de observer
scrollAnimationElements.forEach(element => {
  scrollAnimationObserver.observe(element);
});



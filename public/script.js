

// BUTTON OP DE DETAILSPAGINA.EJS

// selecteer de knop
const button = document.querySelector('button');

// voeg een event listener toe voor het "click" event
button.addEventListener('click', function() {
  // verander de achtergrondkleur van de body naar rood
  document.body.style.backgroundColor = 'red';

  // verander de tekst van de knop naar "Geklikt!"
  button.textContent = 'Geklikt!';
});


// API

const h1 = document.querySelector('section:nth-of-type(4) h1');
const h2 = document.querySelector('section:nth-of-type(4) h2');
const h3 = document.querySelector('section:nth-of-type(4) h3');

fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
  console.log(data);
  h1.innerHTML = data.quote;
  h2.innerHTML = data.character;
  h3.innerHTML = data.anime;
})
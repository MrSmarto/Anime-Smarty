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

// 404 pagina
// BRON: https://codepen.io/1832Manaswini/pen/Vwezyjx

let t1 = gsap.timeline();
let t2 = gsap.timeline();
let t3 = gsap.timeline();

t1.to(".cog1",
{
  transformOrigin:"50% 50%",
  rotation:"+=360",
  repeat:-1,
  ease:Linear.easeNone,
  duration:8
});

t2.to(".cog2",
{
  transformOrigin:"50% 50%",
  rotation:"-=360",
  repeat:-1,
  ease:Linear.easeNone,
  duration:8
});

t3.fromTo(".wrong-para",
{
  opacity:0
},
{
  opacity:1,
  duration:1,
  stagger:{
    repeat:-1,
    yoyo:true
  }
});

 
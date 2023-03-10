// HEADER objects

const films = [ 
    { name: 'naruto', genre: 'rustig' },
    { name: 'one piece', genre: 'romantiek' }, 
    { name: 'dragonball', genre: 'sad' }
  ];

// FOOTER objects

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
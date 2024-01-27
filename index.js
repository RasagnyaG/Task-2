const cardcontainer = document.querySelector('.cardcontainer');

async function fetchJoke() {
  const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw&type=twopart');
  const data = await response.json();
  return data;
}

var ind = 0 // color schemes

function createCard(joke) {
  //creating card elements
  const card = document.createElement('div');
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('front');
  front.textContent = joke.setup;

  const back = document.createElement('div');
  back.classList.add('back');
  back.textContent = joke.delivery;

  // appending things to make card
  card.appendChild(front);
  card.appendChild(back);
  cardcontainer.appendChild(card);

  //for two diffrenet color schemes
  if (ind % 2 === 0) {
    front.classList.add('evenfront');
    back.classList.add('evenback');
    card.classList.add('evencard');
  } else {
    front.classList.add('oddfront');
    back.classList.add('oddback');
  }
  
}

async function displayJokes() {
  for (let i = 0; i < 12; i++) { // Displaying 12 jokes
    const joke = await fetchJoke();
    createCard(joke);
    ind +=1 // color schemes
  }
}

displayJokes();

// Function to fetch data from the given API
async function fetchData() {
    try {
        // Using the fetch api to fecth data
        let url = "https://official-joke-api.appspot.com/random_ten";
        let response = await fetch(url);
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to create and append cards to the container
async function createCards() {
    let data = await fetchData();
    // Converting data into json format 
    let dataJson = await data.json();
    let cardContainer = document.querySelector('.card-container');

    // Iterating through each of the objects present in the data, and creating cards for each
    dataJson.forEach(obj => {
        let card = document.createElement('div');
        card.className = 'card';

        let cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        let cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        cardFront.innerHTML =
            // Capitalizing first character of obj.type 
            `<h2>${obj.type.charAt(0).toUpperCase() + obj.type.slice(1)}</h2>
        <h4>${obj.setup}</h4>`;

        let cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.innerHTML = `<h3>${obj.punchline}</h3>`;

        // Appending all elements to create the structure of a card
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cardContainer.appendChild(card);
    });
}

// Call the function to create cards when the page loads
window.onload = createCards;

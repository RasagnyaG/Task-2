//Getting the initial elements inside the single card
const setup = document.getElementById("setup");
const type = document.getElementById("type");
const punchline = document.getElementById("punchline");
let cont = document.getElementById("full_card");

//API link
const jokeTeller = "https://official-joke-api.appspot.com/random_ten";

//To get the response from the API link
async function getJokes() {
    try{
        let response = await fetch(jokeTeller);
        let jokesAsJson = await response.json();
        console.log("API call successfull !");
        return Promise.resolve(jokesAsJson);
    } catch(error){
        console.error(error);
    }
}

getJokes()
.then(data => {
    //Console printing for debugging purposes
    console.log("Recieved jokes : ", data);
    setup.textContent = data[0].setup;
    type.textContent = data[0].type + " jokes!";
    punchline.textContent = data[0].punchline;
    console.log("Working on initial card");

    /*
    Here i clone the initial card container and insert the jokes into
    each of them seperately through a loop and then insert them into the page.
    This would have much smaller lines of code than manually creating 10 cards and 
    obtaining the setyp,type and punchline elements for all of them and inserting the
    text separately.
    */
    for(let i=0; i<9; i++){
        console.log("Working on duped card no : " + (i+1).toString());
        let new_container = cont.cloneNode(true);

        let setupCl = new_container.querySelector('#setup');
        let typeCl = new_container.querySelector('#type');
        let punchCl = new_container.querySelector('#punchline');

        setupCl.textContent = data[i+1].setup;
        typeCl.textContent = data[i+1].type + " jokes!";
        punchCl.textContent = data[i+1].punchline;
        cont.insertAdjacentElement("afterend",new_container);
    }
})



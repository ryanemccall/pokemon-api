// API application programming interface
/* an interface between two applications that allos
interactions between them without the use of less abstract language
    -- two types of APIs
        - browser API 
        built into the browser and able to expose data from browser to enviroment
        ex: DOM API allowing us to style page, make popup windows appear, etc
        - third part APIS
        required retrieval of their code from the web,
            such as Google Maps API
            - object based - have containers for the data API uses
*/

// HTTP Requests
/*defined set of request methods which indicate an action to be performed
    REST - representational state transfer
     architectural style for stateless standard of communication
    - GET  retrieves resources by an id
    - POST  creates a new resource
    - PUT   updates a resource using an id
    - DELETE removes specific resource using an id
*/

let cardImg = document.querySelector("body > div > div > div.card-img > img");
//console.log(cardImg); just to make sure it works

let name = document.querySelector(".name");
//console.log(name);
let ability = document.querySelector(".ability");

let weight = document.querySelector("body > div > div > div.card-body > div.paragraph > p > em > strong")
//console.log(weight);

let generateBtn = document.querySelector(".submit-btn");

generateBtn.addEventListener("click", (e) => {
    e.preventDefault()
 // e stands for event //preventDefault stops it from refreshing the whole page or crashing in the event of user failure

let id = document.querySelector(".search-input").value;

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //GET Request
//     .then(res => res.json()) //takes the api info and puts it into JSON format
//     .then(data => {
//         console.log(data)
//         name.innerText = data.name //theen this function console.logs the name on screen
//         cardImg.src = data.sprites.front_shiny
//         ability.innerText = data.abilities[0].ability.name;
//         weight.innerText = data.weight

//     })

async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json();
    name.innerText = data.name //theen this function console.logs the name on screen
    cardImg.src = data.sprites.front_shiny
    ability.innerText = data.abilities[0].ability.name;
    weight.innerText = data.weight
    
}
getPokemon();
})


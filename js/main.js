/* <a href="pokemon-info.html#id=0" target="_blank" class="pokemon-card">
    <img src="https://i.ibb.co/hV3cj0k/Squirtle.png" alt="Squirtle">
    <h4>Name 1</h4>
    <p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>
    <div class="number">1</div>
</a> */


// Variables
let start = 1
let limitCards = 12

// let test = "asdf".charAt(0).toUpperCase()
// let test2 = "asdf".slice(1)
// let fulltext = test+test2

// let pokemonlist = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate" ]
// let pokemonlist = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon" ]

let pokemonSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" // .svg

let pokemonListURL = "https://pokeapi.co/api/v2/pokemon/" // ?offset=20&limit=20 // 1

// calls
let pokedex = document.querySelector(".container-cards")

//

// for(let i = 0; i < limitCards; i++){
//     pokedex.innerHTML += `<a href="pokemon-info.html#id=0" target="_blank" class="pokemon-card">
//     <img src="https://i.ibb.co/hV3cj0k/Squirtle.png" alt="Squirtle">
//     <h4>Name 1</h4>
//     <p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>
//     <div class="number">1</div>
// </a> `
// }

// for(let i = 0; i < limitCards; i++){
//     if (pokemonlist[i]) {
//         pokedex.innerHTML += `<a href="pokemon-info.html#id=0" target="_blank" class="pokemon-card">
//         <img src="https://i.ibb.co/hV3cj0k/Squirtle.png" alt="Squirtle">
//         <h4>${pokemonlist[i]}</h4>
//         <p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>
//         <div class="number">1</div>
//         </a> `
//     }
// }

// for(let i = start; i < limitCards+start; i++){
//     if (pokemonlist[i-1]) {
//         pokedex.innerHTML += `<a href="pokemon-info.html#id=${i}" target="_blank" class="pokemon-card">
//         <img src="${pokemonSprite}${i}.svg" alt="${pokemonlist[i-1]}">
//         <h4>${pokemonlist[i-1].charAt(0).toUpperCase()+pokemonlist[i-1].slice(1)}</h4>
//         <p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>
//         <div class="number">${i}</div>
//         </a> `
//     }
// }


let renderList = (list) => {
    pokedex.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        
        let pokemonID = i + start
        let pokemonName = list[i].name.charAt(0).toUpperCase()+list[i].name.slice(1)
        // let pokemonName = list[i].name
        
        pokedex.innerHTML += `<a href="pokemon-info.html#id=${pokemonID}" target="_blank" class="pokemon-card">
        <img src="${pokemonSprite}${pokemonID}.svg" alt="${pokemonName}">
        <h4>${pokemonName}</h4>
        <!--<p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>-->
        <div class="number">${pokemonID}</div>
        </a> `
    }
}

async function logFetch(url) {
    try {
        const response = await fetch(url)
        let pokemonInfo = await response.json()
        return pokemonInfo
    }
    catch(e){
        console.error(e)
    }
}


async function mainFuntion() {
    try{
        // let pokemonList = await logFetch(pokemonListURL+`?offset=${start-1}&limit=${limitCards}`)
        let pokemonList = await logFetch("../json/list0-20.json")
        renderList(pokemonList.results)
    } catch(e) {
        console.error(e)
    }
}


mainFuntion()




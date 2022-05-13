// Variables

let siteURL = window.location.toString()
//"http://127.0.0.1:5500/pokemon-info.html#id=20"
let vars = siteURL.split("=")
// [
//     "http://127.0.0.1:5500/pokemon-info.html#id",
//     "20"
// ]
let pokemonID = vars[1]

let pokemonListURL = "https://pokeapi.co/api/v2/pokemon/"


// Calls
let pokemonImage = document.querySelector(".pokemon-image img")
let typeSection = document.querySelector("#tipo")
let height = document.querySelector("#altura")
let width = document.querySelector("#peso")
let nameSection = document.querySelector(".pokemon-name p")
let abilitiesSection = document.querySelector("#pokemon-abilities")

// Functions 
async function logFetch(url) {
    try {    
        const res = await fetch(url)
        return await res.json()
    }
    catch(e){
        console.error(e)
    }
}

let renderInfo = (pokeInfo) => {
    let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`
    let pokemonName = pokeInfo.name
    let altura = pokeInfo.height
    let peso = pokeInfo.weight

    let tipo = []
    for (let type of pokeInfo.types) {
        tipo.push(" "+type.type.name)
    }

    let abilities = []
    for (let ability of pokeInfo.abilities) {
        abilities.push(ability.ability.name)
    }
    console.log(abilities)
    
    pokemonImage.setAttribute("src", sprite)
    pokemonImage.setAttribute("alt", pokemonName)

    typeSection.innerHTML = tipo.toString()
    height.innerHTML = `${altura} m`
    width.innerHTML = `${peso} kg`

    nameSection.innerHTML = pokemonName

    for(let ability of abilities){
        abilitiesSection.innerHTML = `<li>${ability}</li>`
    }
    
}

async function mainFuntion() {
    try{
        let pokemonInfo = await logFetch(pokemonListURL+`${pokemonID}`)
        renderInfo(pokemonInfo)
    } catch(e) {
        console.error(e)
    }
}

mainFuntion()

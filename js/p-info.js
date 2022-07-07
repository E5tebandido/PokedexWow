var getDataDesc = (pokemonid) => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonid)  
    .then(response => response.json())  
    .then(function(pokeData) {  
        console.log(pokeData["abilities"]);
        setDataDesc(pokeData);
    })
} 

var getId = (spliter) => {
    getDataDesc(window.location.toString().split(spliter)[1]);
}

getId("=")

var setDataDesc = (object) => {
    document.querySelector(".pokemon-image img").setAttribute("src", object["sprites"]["other"]["dream_world"].front_default);
    document.querySelector("#tipo").innerHTML = iterator(object["types"]).type.name;
    document.querySelector("#altura").innerHTML = object["height"] + "m";
    document.querySelector("#peso").innerHTML = object["weight"] + "kg";
    document.querySelector(".pokemon-name p").innerHTML = object["name"];
    document.querySelector("#pokemon-abilities").innerHTML = iterator(object["abilities"]).ability.name;
} 

var iterator = (array) => {
    for (let e of array)
        return e
}
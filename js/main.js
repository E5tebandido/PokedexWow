var getData = (pokemonid) => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonid)  
    .then(response => response.json())  
    .then(function(pokeData) {  
        setData(pokeData)  
    })
} 

var setData = (object) => {
    document.querySelector(".container-cards").innerHTML += `
        <a href="pokemon-info.html#id=${object.id}" target="_blank" class="pokemon-card">
        <img src="${object["sprites"]["other"]["dream_world"].front_default}" alt="${object.name}">
        <h4>${object.name}</h4>
        <div class="number">${object.id}</div>
        </a> 
    `;
} 

var counter = (num) => {
    for (let i=1; i<num+1; i++) {
        getData(i)
    }
}

counter(100);


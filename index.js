const pokeContainer = document.querySelector('.poke')

function fetchPoke(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then((res) => res.json())
.then((data) => {
    createPoke(data);
});
}

function getPokes(number) {
    for(let i = 0; i <= number; i++){
        const a = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
        fetchPoke(a);
        console.log(a);
    }
}

function createPoke(pokemon){
    const card = document.createElement('div');

    const spriteContainer = document.createElement("div");
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
    spriteContainer.appendChild(sprite);
    
    const number = document.createElement("p")
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;


    const name = document.createElement("p");
    name.textContent = pokemon.name;
    name.classList.add("font-mono")
    
    const dexEntry = document.createElement("p");
    const pokeType = pokemon.types
    console.log("tipoPokemon",pokeType)
    
    pokeType.forEach(({type}) => {
        console.log("type", type)
        dexEntry.textContent += ` ${type.name} `
        console.log(dexEntry)
    });
    

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(dexEntry);

    const pokeContainer = document.getElementById("pokeContainer");
    pokeContainer.appendChild(card);

    sprite.classList.add("shadow-xl", "rounded", "bg-white", "ml-2","mt-2")
    
    card.classList.add("w-auto","m-2", "bg-red-100", "rounded", "overflow-hidden")
    
    name.classList.add("ml-2");

    number.classList.add("ml-2");

    dexEntry.classList.add("ml-2", "font-mono");


}
 getPokes(5)
let cards = [];

function cardbody(input, pokemons, filter = "") {
    pokemons.innerHTML = "";
    let count = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i].name.english.toLowerCase().startsWith(filter)) {
            count++;
            //card
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = ` 
   <img src="${input[i].hires}"> 
     <div class="p-3">
          <h3>${input[i].name.english}</h3>
         <p>${input[i].description}</p>
     </div>`
            cards.push(input);
            pokemons.appendChild(card);
            if (count === 8) break; //načte pouze 8 karet
        }
    }
}
window.onload = () => {
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
        .then((response) => response.json())
        .then((input) => {
            cards = input
            cardbody(input, pokemons);
        });
    let input2 = document.getElementById('search')
    const pokemons = document.getElementById("pokemons")
    input2.addEventListener('keyup', e => {
        if (e.key === "Enter") {
            cardbody(cards, pokemons, input2.value)
        }
    });
}

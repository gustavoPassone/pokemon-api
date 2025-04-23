const btn = document.querySelector("#btn")
btn.addEventListener("click", garcom)
const res = document.querySelector(".res")

function garcom() {
    let ramdom = Math.floor(Math.random() * 1026)
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/${ramdom}`)
    .then((res) => res.json())
    .then((data) => {
        gerarPokemon(data)
    })
}

function gerarPokemon(data) {
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    let img = data.sprites.front_default

    console.log(data.sprites.front_default)
    
    res.innerHTML = `
    <div class="card">
        <img src="${img}" alt="pokemon">
        <div class="container">
            <div class="title">
                <h1>${nome}</h1>
                <p>n° ${id}</p>
            </div>
            <p>${tipo}</p>
        </div>
    </div>
    `
}

let list_pokemon = [], dom;
list_pokemon = [{ nombrePokemon: "charmander", tipoPokemon: "fuego", imagenPokemon: "./img/charmander.png", descripcion: "es volador y echa fuego", ataquePokemon: "80%", defensaPokemon: "50%", velocidadPokemon: "70%", evolucion: ["./img/evoluciones/charmander1.png", "./img/evoluciones/charmander2.png"] },
{ nombrePokemon: "bulbasaur", tipoPokemon: "aire", imagenPokemon: "./img/bulbasaur.png", descripcion: "es volador y echa fuego", ataquePokemon: "80%", defensaPokemon: "50%", velocidadPokemon: "70%", evolucion: ["./img/evoluciones/bulbasaur.png", "./img/evoluciones/bulbasaur2.png"] }];

dom = "<br><ul>";
for (let i = 0; i < list_pokemon.length; i++) {
    dom += "<li>";
    dom += "<a href'" + list_pokemon[i] + "'>" + "<img src='" + list_pokemon[i].imagenPokemon + "'>" + "</a>" + "</li>";
}
dom += "</ul><br>";
pokemons.innerHTML = dom;

function buscar_pokemon() {
    var buscarPokemon = document.getElementById("pokemonBuscar").value;
    var pokemonElegido = document.getElementById('pokemon');
    var dom = "";

    list_pokemon.forEach((pokemon, index) => {
        var nombre = buscarPokemon.toUpperCase() === pokemon.nombrePokemon.toUpperCase();
        if (nombre === true || index === parseInt(buscarPokemon) - 1 ) {
            dom += '<div class="card" style="width: 18rem;">';
            dom += '    <img src="' + pokemon.imagenPokemon + '" width="40" height="150" class="card-img-top border"  alt="...">';
            dom += '<div class="card-body">';
            dom += '<h5 class="card-title border">' + pokemon.nombrePokemon + "</h5><b>tipoPokemon:</b> " + pokemon.tipoPokemon + "";

            dom += '<div class="row">';
            dom +=  '   <div class="col">';
            dom += '        <b class="card-text">Estadisticas</b>';
            dom += '        <p class="card-text"><b>Ataque:</b> ' + pokemon.ataquePokemon + '</p>';
            dom += '        <p class="card-text"><b>Defensa:</b>' + pokemon.defensaPokemon + '</p>';
            dom += '    <p class="card-text"><b>Velocidad:</b>' + pokemon.velocidadPokemon + '</p>';
            dom += '    </div>';
            dom += '    <div class="col">';
            dom += '        <img src="' + pokemon.evolucion[0] + '"  width="20" height="70" class="card-img-top" alt="...">';
            dom += '         <img src="' + pokemon.evolucion[1] + '"  width="20" height="70"  class="card-img-top" alt="...">';
            dom += '   </div>';
            dom += '</div>';
            dom += '</div>';
            dom += '</div>';
            dom += '</div>';
            dom += '</div>';
            dom += '</div>';
        }

    });

    pokemonElegido.innerHTML = dom;
}
function crea_pokemon() {
    var nombrePokemon = document.getElementById("nombrePokemon").value;
    var tipoPokemon = document.getElementById("tipoPokemon").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagenPokemon = "./img/" + nombrePokemon + ".png";
    var evolucion = [];
    var ataquePokemon = document.getElementById("ataquePokemon").value;
    var defensaPokemon = document.getElementById("defensaPokemon").value;
    var velocidadPokemon = document.getElementById("velocidadPokemon").value;

    for (let i = 1; i < 3; i++) {
        var evolucionRuta = "./img/evoluciones/" + (nombrePokemon + i) + ".png";
        evolucion.push([evolucionRuta]);
    }

    list_pokemon.push({ nombrePokemon, tipoPokemon, imagenPokemon, descripcion, ataquePokemon, defensaPokemon, velocidadPokemon, velocidadPokemon, evolucion });
    modificaLista()
}
function modificaLista() {
    dom = "<ul>";
    for (let i = 0; i < list_pokemon.length; i++) {
        dom += "<li>";
        dom += "<a href'" + list_pokemon[i] + "'>" + "<img src='" + list_pokemon[i].imagenPokemon + "'>" + "</a>" + "</li>";
    }
    dom += "</ul>";
    pokemons.innerHTML = dom;
}
function updateListaTipo() {

    var tipo = document.getElementById("pokemonBuscar").value;
   
    info = "<ul>";
    list_pokemon.forEach((item, index) => {
        var numero = index + 1;
        var buscarTipo = tipo.toUpperCase() === item.tipoPokemon.toUpperCase();
         
        if(buscarTipo === true) {
            info += "<li>";
            info += "<P>" + numero + " " + item.nombrePokemon + "</P>" + "<img src='" + item.imagenPokemon + "' width='70' height='70'></a></p>";
        } else if (tipo.toUpperCase() === "Todas".toUpperCase()) {
            info += "<li>";
            info += "<P>" + numero + " " + item.nombrePokemon + "</P>" + "<img src='" + item.imagenPokemon + "' width='70' height='70'>";
        }
    });
    info += "</ul>";
    pokemons.innerHTML = info;
}



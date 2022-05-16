class POKEMON {
    nombre = '';
    tipo = "";
    imagen = "";
    evoluciones = [];
    descripcion = "";
    construct(tipo, imagen, evoluciones, descripcion) {
        this.tipo = tipo;
        this.imagen = imagen;
        this.evoluciones = evoluciones;
        this.descripcion = descripcion;
    }
    setImagen(imagen) {
        this.imagen.push(imagen);
        // this.imagen = imagen;
    }
    setEvoluciones(evoluciones) {
        this.evoluciones.push(evoluciones);
        // this.evoluciones = evoluciones;
    }

    getImagen(){
        return this.imagen;
    }
    getTipo(){
        return this.tipo;
    }
    getEvoluciones(){
        return this.evoluciones;
    }
}
pokemones = [];
pokemon = new POKEMON("trueno", "", "","es un pokemon tipo rayo");
pokemones.push(pokemon);

pokemons = document.getElementById('pokemons');
var linkimg, cont, info;
    linkimg = [{nombre:"charizard", tipo:"fuego", imagen:"./IMAGENES/charizard.png", descripcion:"es volador y echa fuego", },
               {nombre:"venusaur", tipo:"fuego", imagen:"./IMAGENES/venusaur.png", descripcion:"es volador y echa fuego", }];

    info = "<ul class='ul'>";
    for (let i = 0; i < linkimg.length; i++) {
            info += "<li>";
            info += "<a href'"+linkimg[i]+"'>"+"<img src='"+linkimg[i].imagen+"'>"+"</a>"+"</li>";
            console.log(linkimg[i]);
        //     info += "<a href'"+linkimg[i]+"'>"+"<img src='"+linkimg[0].imagen[i]+"'>"+"</a>"+"</li>";
    }
    info += "</ul>";
    pokemons.innerHTML = info;

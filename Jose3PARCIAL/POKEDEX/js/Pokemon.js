class Pokemon {
    nombre = '';
    tipo = "";
    imagen = "";
    evolucion = "";
    descripcion = "";
    ataque = ""; defensa = ""; velocidad = ""; evolucion= ""; 
    constructor(nombre, tipo, imagen, descripcion, ataque, defensa, velocidad, evolucion ) {
    // constructor(nombre, tipo, imagen, descripcion, ataque, defensa, velocidad, velocidad, evolucion ) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.evolucion = evolucion;

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
// pokemones = [];
// pokemon = new POKEMON("trueno", "", "","es un pokemon tipo rayo");
// pokemones.push(pokemon);
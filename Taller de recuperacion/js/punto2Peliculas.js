class Pelicula {
    titulo = "";
    descripcion = "";
    actores = "";
    duracion = "";
    constructor(titulo, descripcion, actores, duracion){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.actores = actores;
        this.duracion = duracion;
    }
    getTitulo(){
       return this.titulo; 
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }
    getDescripcion(){
       return this.descripcion; 
    }
    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
    getActores(){
       return this.asctores; 
    }
    setActores(actores){
        this.actores = actores;
    }
}
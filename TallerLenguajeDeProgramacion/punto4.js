// # Archivo: punto4.js
// # Autor: Jose Daniel Grijalba Osorio
// # Fecha: 14/04/2022
// # Descripción: Taller de herencia

//(Clase Padre) de todos los alimentos
class Producto {
    nombre = "";
    fechaCaducidad = "";
    numeroLote = 0;
    paisOrigen = 0;
    fechaEnvasado = "";
    constructor(nombre, fechaCaducidad, numeroLote, paisOrigen,fechaEnvasado){
      this.nombre = nombre;
      this.fechaCaducidad = fechaCaducidad;
      this.numeroLote = numeroLote;
      this.paisOrigen = paisOrigen;
      this.fechaEnvasado = fechaEnvasado;
    }
     setNombre(nombre){this.nombre = nombre;}
     getNombre(){return this.nombre;}
    
     setFechaCaducidad(fechaCaducidad){this.fechaCaducidad = fechaCaducidad;}
     getFechaCaducidad(){return this.fechaCaducidad;}
    
     setNumeroLote(numeroLote){this.numeroLote = numeroLote;}
     getNumeroLote(){return this.numeroLote;}
    
     setFechaEnvasado(fechaEnvasado){this.fechaEnvasado = fechaEnvasado;}
     getFechaEnvasado(){return this.fechaEnvasado;}
    
     setPaisOrigen(paisOrigen){this.paisOrigen = paisOrigen;}
     getPaisOrigen(){return this.paisOrigen;}
}
class Fresco extends Producto {
    constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen){
        super();
        this.nombre = nombre;
        this.fechaCaducidad = fechaCaducidad;
        this.numeroLote = numeroLote;
        this.fechaEnvasado = fechaEnvasado;
        this.paisOrigen = paisOrigen;
    }
    
    imprimirProductoFresco(){
        console.log("\nNombre: " + this.getNombre() + "\nFecha de caducidad: " + this.getFechaCaducidad() + "\nNumero lote: " + this.getNumeroLote() + "\nFecha de envasado: " + this.getFechaEnvasado() + "\nPais de origen: " + this.getPaisOrigen());
    }

}
//(Clase Padre) de productos refigerados y congelados he hija de Producto
class RefigeradoCongelado extends Producto{
    tempMantenimientoR;
    constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR){
        // super(nombre, fechaCaducidad, numeroLote, paisOrigen, fechaEnvasado);
        super();
        this.nombre = nombre;
        this.fechaCaducidad = fechaCaducidad;
        this.numeroLote = numeroLote;
        this.fechaEnvasado = fechaEnvasado;
        this.paisOrigen = paisOrigen;
        this.tempMantenimientoR = tempMantenimientoR;
    }
    setTempMantenimientoR( tempMantenimientoR){this.tempMantenimientoR = tempMantenimientoR;}
    getTempMantenimientoR(){return this.tempMantenimientoR;}
    
    imprimirProductoRC(){
        console.log("\nNombre: " + this.getNombre() + "\nFecha de caducidad: " + this.getFechaCaducidad() + "\nNumero de lote: " + this.getNumeroLote() +"\nFecha de envasado: " + this.getFechaEnvasado() + "\nPais de origen: " + this.getPaisOrigen() + "\nTemperatura de mantanimiento recomendada: " + this.getTempMantenimientoR());
    }
}
class Refigerado extends RefigeradoCongelado {
     codOrganismoSuper = 0; // codigo organismo de supervision alimentaria

    constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR, codOrganismoSuper){
        super(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR);
        this.codOrganismoSuper = codOrganismoSuper;
    }
    setCodOrganismoSuper(codOrganismoSuper){this.codOrganismoSuper = codOrganismoSuper;}
    getCodOrganismoSuper(){return this.codOrganismoSuper;}
    
    imprimirProductoR(){
        this.imprimirProductoRC();
        console.log("Codigo organismo de supervisión alimentaria: " + this.getCodOrganismoSuper());
    }
}
class Congelado extends RefigeradoCongelado {
  constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR){
      super(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR);
  }
  imprimirProductoC(){
      this.imprimirProductoRC();
  }
}
// Clases derivados de productos Congelados
class CongeladoAire extends Congelado {
  
  nitrogeno = 0; oxigeno = 0; dioxidoCarbono = 0;  vaporAgua = 0;
  constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR){
      super(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR);
      this.nitrogeno = 0;
      this.oxigeno = 0;
      this.dioxidoCarbono = 0;
      this.vaporAgua = 0;
  }
  setNitrogeno(nitrogeno){this.nitrogeno = nitrogeno;}
  getNitrogeno(){return this.nitrogeno;}
  
  setOxigeno(oxigeno){this.oxigeno = oxigeno;}
  getOxigeno(){return this.oxigeno;}
  
  setDioxidoCarbono(dioxidoCarbono){this.dioxidoCarbono = dioxidoCarbono;}
  getDioxidoCarbono(){return this.dioxidoCarbono;}
  
  setVaporAgua(vaporAgua){this.vaporAgua = vaporAgua;}
  getVaporAgua(){return this.vaporAgua;}
  
  imprimirCongeladoPorAire(){
      this.imprimirProductoC();
      console.log("Composición del aire:\nNitrogeno: %" + this.getNitrogeno() + "\nOxigeno: %" + this.getOxigeno() + "\nDioxido de carbono: %" + this.getDioxidoCarbono()
              + "\nVapor de agua: %" + this.getVaporAgua());
  }
}
class CongeladoAgua extends Congelado {
  
  salinidad;
  constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR){
      super(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR);
      this.salinidad = 0;
  }
  setSalinidad(salinidad){this.salinidad = salinidad;}
  getSalinidad(){return this.salinidad;}
  
  imprimirCongeladoPorAgua(){
      this.imprimirProductoC();
      console.log("Salinidad(gm sal/lt agua): " + this.getSalinidad());
  }
}
class CongeladosNitrogeno extends Congelado {
  metodCongelacion;
  tiempoExpNitrogeno;//en segundos
//   constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR, metodCongelacion){
  constructor(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR){
    super(nombre, fechaCaducidad, numeroLote, fechaEnvasado, paisOrigen, tempMantenimientoR);
    // metodCongelacion = "";
    this.metodCongelacion = "";
    this.tiempoExpNitrogeno = 0;
    }

    setMetodoCongelacion(metodCongelacion){this.metodCongelacion = metodCongelacion;}
    getMetodoCongelacion(){return this.metodCongelacion;}

    setTiempoExposicion(tiempoExpNitrogeno){this.tiempoExpNitrogeno = tiempoExpNitrogeno;}
    getTiempoExposicion(){return this.tiempoExpNitrogeno;}

    imprimirCongeladoPorNitrogeno(){
        this.imprimirProductoC();
        console.log("Metodo de congelacion: " + this.getMetodoCongelacion() + "\nTiempo de exposicion al nitrogeno: " + this.getTiempoExposicion());
    }
}
console.log('----------------------------[ Producto Fresco ]--------------------------------');
alimentoFresco = new Fresco("Filete de pollo","07/01/2022","72","03/03/2018","Colombia", 40);
alimentoFresco.imprimirProductoFresco();
console.log('----------------------------[ Productos Refigerados ]--------------------------------');
alimentoRefigerado = new Refigerado("Yogourt","07/04/2022","750","03/03/2020","E.U.", 20);
alimentoRefigerado.imprimirProductoR();
console.log('----------------------------[ Producto Congelado por Aire ]--------------------------------');
alimentoCongelado = new CongeladoAire("Mariscos","03/03/2022","55","03/03/2019","Panama", 30,123);
alimentoCongelado.setNitrogeno(10);
alimentoCongelado.setOxigeno(15);
alimentoCongelado.setDioxidoCarbono(7);
alimentoCongelado.setVaporAgua(5);
alimentoCongelado.imprimirCongeladoPorAire();
console.log('----------------------------[ Producto Congelado por Agua ]--------------------------------');
alimentoCongelado = new CongeladoAgua("Pescado","03/03/2022","82","03/03/2021","Venesuela", 50);
// alimentoCongelado.setMetodoCongelacion("Agua");
alimentoCongelado.setSalinidad(65);
alimentoCongelado.imprimirCongeladoPorAgua();
console.log('----------------------------[ Producto Congelado por Nitrogeno ]--------------------------------');
alimentoCongelado = new CongeladosNitrogeno("Carne de res","03/03/2022","70","03/03/2020","Colombia", 60);
alimentoCongelado.setMetodoCongelacion("nitrogeno");
alimentoCongelado.setTiempoExposicion(35);
alimentoCongelado.imprimirCongeladoPorNitrogeno();



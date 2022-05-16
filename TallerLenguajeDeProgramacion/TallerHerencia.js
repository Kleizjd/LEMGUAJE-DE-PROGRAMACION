// # Archivo: TallerHerencia.js
// # Autor: Jose Daniel Grijalba Osorio
// # Fecha: 14/04/2022
// # Descripción: Taller de herencia
console.log("==================== (1) Herencia desde Precio a Factura ===================================================="); 
class Precio {
    #emisor = "";
    #cliente = "";
    constructor(emisor = "La Completa", cliente) {
        this.#emisor = emisor;
        this.#cliente = cliente;
    }
    imprimirFactura(){
        return  "Factura de "+this.#emisor +" a nombre del cliente "+ this.#cliente+" por valor total: 170000";
    }
}
class Factura extends Precio {

}
var emisor;// sin definir porque la deje por defecto
const factura = new Factura(emisor, "Mario");
console.log(factura.imprimirFactura()); 
console.log("===================== (2) Objetos de cada Variable en una lista =========================================="); 
    class Integer {
        entero = 0;
        constructor(entero){
                this.entero = entero;
         }
        get getEntero(){  
            if(Number.isInteger(this.entero)) {
                return this.entero;
            } else {
                return 'No es entero';
            }
        }
    }
    
    class Float {
        #flotante = 0.0;
        constructor(flotante){
                this.#flotante = flotante;
        }
        get getFlotante(){  
            if(Number.isInteger(this.#flotante)) {
                return 'No es flotante';
            } else {
                return this.#flotante;
            }
        }
    }
    class Double {
        #doble = 0.00;
        constructor(doble){
            this.#doble = doble;
        }
        get getDoble(){
            if(Number.isInteger(this.#doble)) {
                return 'No es Double';
            } else {
                return this.#doble;
            }
        }
    }
    const variables = [new Integer(12), new Float(2.1), new Double(3.567)];
    console.log("Integer: "+variables[0].getEntero);
    console.log("Float: "+variables[1].getFlotante);
    console.log("Double: "+variables[2].getDoble);

console.log("=========(3) Herencia desde Vehiculo a Coche, Bicicleta, Camioneta, Motocicleta ============================"); 
console.log("________________________==  VEHICULOS Y SUS LLANTAS FALTANTES  ==______________________"); 
class Vehiculo{
    color = "";
    ruedas = 0;
    vehiculos = "";
    constructor(color, ruedas) {
        this.color = color;
        this.ruedas = ruedas;
    }
    catalogar(vehiculos){
        if(vehiculos != null){
            for (let i = 0; i < vehiculos.length; i++) {
                 console.log(vehiculos[i].constructor.name+" "+vehiculos[i].getAttributes()+" con "+this.ruedas+" ruedas");
            }
        }
    }
}
class Coche extends Vehiculo {
    #velocidad = 0;//KM/H
    #cilindrada = 0;
    catalogar(ruedas) {
        super.catalogar();
        this.ruedas = ruedas;
    }
    getAttributes(vehiculos){
        console.log("han encontrado "+vehiculos.constructor.name+" con "+this.ruedas+" ruedas \n de Color:"+this.color);
    }
}
class Bicicleta extends Vehiculo {
    tipo = { u:"Urbana", d:"Deportiva"};
    constructor(color, ruedas, tipo) {
        super(color, ruedas);
        this.tipo = tipo === "u" || tipo === "d"  ? this.tipo[tipo] : "No existente" ;
    }
    catalogar(ruedas) {
        super.catalogar();
        this.ruedas = ruedas;
    }
    getAttributes(vehiculos){
        console.log("han encontrado "+vehiculos.constructor.name+" con "+this.ruedas+" ruedas \n de Color: "+this.color+" Tipo: "+this.tipo);
    }
}
class Camioneta extends Vehiculo {
    carga = 0;//KG

    constructor(color, ruedas, carga) {
        super(color, ruedas);
        this.carga = carga;

    }
    catalogar(ruedas) {
        super.catalogar();
        this.ruedas = ruedas;
    }
    getAttributes(vehiculos){
        console.log("han encontrado "+vehiculos.constructor.name+" con "+this.ruedas+" ruedas \n Carga: "+this.carga+" Kg");
    }
}
class Motocicleta extends Vehiculo {
    #velocidad = 0;//"Km/h"
    #cilindrada = 0;
    catalogar(ruedas, velocidad, cilindrada) {
        super.catalogar();
        this.ruedas = ruedas;
        this.#velocidad = velocidad;
        this.#cilindrada = cilindrada;
    }
    getAttributes(vehiculos){
        console.log("han encontrado "+vehiculos.constructor.name+" con "+this.ruedas+" ruedas\n Velocidad: "+this.#velocidad+" Km/h Cilindrada: "+this.#cilindrada);
    }
}

const coche = new Coche("Negro", 3);
const bicicleta = new Bicicleta("Amarillo", 1,"u");
const camioneta = new Camioneta("Roja", 2, 50);
const motocicleta = new Motocicleta("Negro", 1, 70, 110);
var vehiculos = [coche, bicicleta, camioneta, motocicleta];
for (let i = 0; i < vehiculos.length; i++) { vehiculos[i].getAttributes(vehiculos[i]); }

console.log("________________[ Vehiculos con Sus respectivas llantas Añadidas ]_______________________________");
coche.catalogar(4);
coche.getAttributes(vehiculos[0]);
bicicleta.catalogar(2);
bicicleta.getAttributes(vehiculos[1]);
camioneta.catalogar(4,78);
camioneta.getAttributes(vehiculos[2]);
motocicleta.catalogar(2,30,110);
motocicleta.getAttributes(vehiculos[3]);



console.log("Pregunta 1")
console.log("------------------------------------------------------------")
class Precio {
    constructor(precio){
        this.Precio = precio;
    }

    getPrecio(){
        return this.Precio;
    }
}

class Factura extends Precio {
    constructor(emisor, cliente, precio){        
        super(precio);
        this.Emisor = emisor;
        this.Cliente = cliente;        
        
    }

    imprimirFactura(){
        return console.log(this.Emisor, this.Cliente, super.getPrecio());
    }
}

const factura1 = new Factura("Coomeva","Michael",200);
factura1.imprimirFactura();
console.log("------------------------------------------------------------")

console.log("Pregunta 2")
console.log("------------------------------------------------------------")
// class Elemento extends multipl(Integer, Float, Double){
//     constructor()
// }
console.log("------------------------------------------------------------")

console.log("Pregunta 3")
console.log("------------------------------------------------------------")

class Vehiculo {
    constructor(color, ruedas){
        this.color = color;
        this.ruedas = ruedas;
    }

    catalogar(listVehiculos){
        let result = [];
        listVehiculos.forEach(element => {
            if(element instanceof Coche){
                result.push(element);
            }else if(element instanceof Bicicleta){
                result.push(element);
            }else if(element instanceof Camioneta){
                result.push(element);      
            }else if(element instanceof Motocicleta){
                result.push(element);
            }
        });

        return result;

    }
}

class Coche extends Vehiculo{
    constructor(color, ruedas, velocidad, cilindrada){
        super(color, ruedas);
        this.velocidad = velocidad;
        this.cilindrada = cilindrada;
    }

    
}

class Bicicleta extends Vehiculo {
    constructor(color, ruedas, tipo){
        super(color, ruedas);
        this.tipo = tipo;
    }

    catalogar(listVehiculos,ruedas){
        let result = [];
        let ArrayResult = super.catalogar(listVehiculos);
        ArrayResult.forEach(element => {
            if(element.ruedas === ruedas){
                result.push(element);
            }
        });

        if(result != null){
            console.log('Se han encontrado ' + result.length + ' de vehiculos con ' + ruedas + ' ruedas')
            console.log(result)
        }

        //return result;
    }
}

class Camioneta extends Coche {
    constructor(color, ruedas, velocidad, cilindrada, cargar){
        super(color, ruedas, velocidad, cilindrada);
        this.cargar = cargar;
    }
}

class Motocicleta extends Bicicleta{
    constructor(color, ruedas, tipo, velocidad, cilindrada){
        super(color, ruedas, tipo);
        this.velocidad = velocidad;
        this.cilindrada = cilindrada;
    }
}

const coche1 = new Coche('rojo', 4, 120, 1300);
const bicicleta1 = new Bicicleta('amarillo', 2, 30, 'deportiva');
const camioneta1 = new Camioneta('azul', 4, 140, 1600, 60);
const motocicleta1 = new Motocicleta('negra', 2, 'deportiva', 250, 1000);


const listVehiculos = [coche1,bicicleta1,camioneta1,motocicleta1];

console.log(coche1.catalogar(listVehiculos));
bicicleta1.catalogar(listVehiculos,2);
console.log("------------------------------------------------------------")

console.log("Pregunta 4")
console.log("------------------------------------------------------------")
class Product {
    constructor(Caducidad,Lote,FechaEnvasado,Pais){
        this.Caducidad = Caducidad;
        this.Lote = Lote;
        this.FechaEnvasado = FechaEnvasado;
        this.Pais = Pais;
    }
//#region get y set
    GetCaducidad(){
        return this.Caducidad;
    }

    GetLote(){
        return this.Lote;
    }

    GetFechaEnvasado(){
        return this.FechaEnvasado;
    }

    GetPais(){
        return this.Pais;
    }

    SetCaducidad(caducidad){
        return this.Caducidad = caducidad;
    }

    SetLote(Lote){
        return this.Lote = Lote;
    }

    SetFechaEnvasado(FechaEnvasado){
        return this.FechaEnvasado = FechaEnvasado;
    }

    SetPais(Pais){
        return this.Pais = Pais;
    }
//#endregion
    
    ToString(){
        return console.log(this.Caducidad + " " + this.Lote+ " " +this.FechaEnvasado+ " " +this.Pais);
    }
}

class ProductosFrescos extends Product{
    constructor(Caducidad,Lote,FechaEnvasado,Pais){
        super(Caducidad,Lote,FechaEnvasado,Pais);
    }
//#region  get y set
    GetCaducidad(){
        return super.Caducidad;
    }

    GetLote(){
        return super.Lote;
    }

    GetFechaEnvasado(){
        return super.FechaEnvasado;
    }

    GetPais(){
        return super.Pais;
    }

    SetCaducidad(caducidad){
        return super.Caducidad = caducidad;
    }

    SetLote(Lote){
        return super.Lote = Lote;
    }

    SetFechaEnvasado(FechaEnvasado){
        return super.FechaEnvasado = FechaEnvasado;
    }

    SetPais(Pais){
        return super.Pais = Pais;
    }
//#endregion

    ToString(){
        return super.ToString();
    }
}

class ProductosRefrigerados extends Product{
    constructor(Caducidad,Lote,FechaEnvasado,Pais,idAlimentario,Temperatura){
        super(Caducidad,Lote,FechaEnvasado,Pais);
        this.idAlimentario = idAlimentario;
        this.Temperatura = Temperatura;
    }
//#region  get y set
    GetidAlimentario(){
        return this.idAlimentario;
    }

    GetTemperatura(){
        return this.Temperatura;
    }

    SetidAlimentario(idAlimentario){
        return this.idAlimentario = idAlimentario;
    }

    SetTemperatura(Temperatura){
        return this.Temperatura = Temperatura;
    }
//#endregion

    ToString(){
        return console.log(super.GetCaducidad() + " " + super.GetLote()+ " " +super.GetFechaEnvasado()+ " " +super.GetPais() + " " + this.idAlimentario +
         " " +this.Temperatura);
    }
}

class ProductosCongelados extends Product{
    constructor(Caducidad,Lote,FechaEnvasado,Pais,Temperatura,TipoCongelado,Composicion,Sal,Agua,Metodo,Tiempo){
        super(Caducidad,Lote,FechaEnvasado,Pais);
        this.Temperatura = Temperatura;
        this.TipoCongelado = TipoCongelado;
        this.Composicion = Composicion;
        this.Sal = Sal;
        this.Agua = Agua;
        this.Metodo = Metodo;
        this.Tiempo = Tiempo;
    }
//#region get y set
    GetTemperatura(){
        return this.Temperatura;
    }

    GetTipoCongelado(){
        return this.TipoCongelado;
    }

    GetComposicion(){
        return this.Composicion;
    }

    GetSal(){
        return this.Sal;
    }

    GetAgua(){
        return this.Agua;
    }

    GetMetodo(){
        return this.Metodo;
    }

    GetTiempo(){
        return this.Tiempo;
    }

    SetTemperatura(Temperatura){
        return this.Temperatura = Temperatura;
    }

    SetTipoCongelado(TipoCongelado){
        return this.TipoCongelado = TipoCongelado;
    }

    SetComposicion(Composicion){
        return this.Composicion = Composicion;
    }

    SetSal(Sal){
        return this.Sal = Sal;
    }

    SetAgua(Agua){
        return this.Agua = Agua;
    }

    SetMetodo(Metodo){
        return this.Metodo = Metodo;
    }

    SetTiempo(Tiempo){
        return this.Tiempo = Tiempo;
    }
//#endregion

    ToString(){
        let tipo = "";
        let array = "";
        let mensaje = "";
        if(this.TipoCongelado === 0){
            tipo = "Congelados Por Aire";
            array = this.Composicion != null ? this.Composicion.split("|") : "";
        }           
        else if(this.TipoCongelado === 1)
            tipo = "Congelados por agua";
        else if(this.TipoCongelado === 2)
            tipo = "Congelados por nitrogeno";

        
        mensaje = super.GetCaducidad() + " " + super.GetLote()+ " " +super.GetFechaEnvasado()+ " " +super.GetPais() + " " + this.Temperatura+ " " + tipo+ " - ";
        
        if(array.length > 0){
            mensaje += array[0] != null ? " % de nitrogeno: " +array[0] : null;
            mensaje += array[1] != null ? "  % de oxigeno: "+ array[1] : null;
            mensaje += array[2] != null ? " % de diosido de carbono: "+ array[2] : null;
            mensaje += array[3] != null ? " % de vapor de agua: "+ array[2] : null;
        }

        if(this.Sal != null){
            mensaje += " cantidad de sal:  " + this.Sal;
            mensaje += " cantidad de agua:  " +this.Agua
        }

        if(this.Metodo != null){
            mensaje += " metodo usado: " + this.Metodo; 
            mensaje += " tiempo en segundos usado: " + this.Tiempo
        }

        return console.log(mensaje);
    }
}

const product = new Product("31/12/2022",5,"01/01/2022",57);
const productosFrescos = new ProductosFrescos("31/12/2022",5,"01/01/2022",57);
const productosRefrigerados = new ProductosRefrigerados("31/12/2022",5,"01/01/2022",57,0001,"30");
const productosCongeladosPorAire = new ProductosCongelados("31/12/2022",5,"01/01/2022",57,"30",0,"20|30|40|50",null,null,null,null);
const productosCongeladosPorAgua = new ProductosCongelados("31/12/2022",5,"01/01/2022",57,"30",1,null,50,30,null,null);
const productosCongeladosPornitrogeno = new ProductosCongelados("31/12/2022",5,"01/01/2022",57,"30",2,null,null,null,"congelado a muy alto nivel",900);

product.ToString();
productosFrescos.ToString();
productosRefrigerados.ToString();
productosCongeladosPorAire.ToString();
productosCongeladosPorAgua.ToString();
productosCongeladosPornitrogeno.ToString();

console.log("------------------------------------------------------------")
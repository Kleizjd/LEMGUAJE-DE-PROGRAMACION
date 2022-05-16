class Producto{
	constructor(codigo,nombre,cantidad){
		this.codigo=codigo;
		this.nombre=nombre;
		this.cantidad=cantidad;
		
	}
}

// class ProductoVendido extends Producto{
// 	constructor(codigo,nombre,cantidad){
// 		super(codigo,nombre,cantidad);
// 	}
// }


let productosDisponibles=[];
let productosAgregados=[];

function capturar(){
	let codigo = document.getElementById("codigo").value;
	let nombre= document.getElementById("producto").value;
	let cantidad = document.getElementById("cantidad").value;
	nuevoProducto = new Producto(codigo,nombre,parseInt(cantidad));
	agregar(nuevoProducto);
}

function agregar(Producto) {
	vaciarTablaProductosDisponibles();
	productosDisponibles.push(Producto);
	productosDisponibles.map(element => {
		document.getElementById("tbodyExistencias").innerHTML += '<td>'+element.codigo+'</td><td>'+element.nombre+'</td><td>'+element.cantidad+'</td></tbody>'
	})
	
}
function imprimirArray(){
	console.log("PR "+productosDisponibles[0].cantidad);

	productosDisponibles.map(element => {
			alert("PR "+element.cantidad);
	})
	console.log('hey');}
function capturarVenta(){
	let codigo = document.getElementById("codigo1").value;
	let cantidad = document.getElementById("cantidad1").value; 
	let resultado = productosDisponibles.find( (element) => element.codigo===codigo);
	if(resultado != null){
		if(codigo ==resultado.codigo){
			if(cantidad <= resultado.cantidad){
				productos = new Producto(codigo,resultado.nombre,cantidad);
				resultado.cantidad = parseInt(resultado.cantidad - cantidad);
				agregarVenta(productos);
				let index = productosDisponibles.indexOf(resultado);
				//productosDisponibles.splice(index-1,index+1,resultado.codigo);
				console.log(""+productosDisponibles.indexOf(resultado))

				productosDisponibles.splice(index, 1);
				agregar(resultado);
			}else{
				alert("Cantidad no Disponible");
			}
		}
	}
	else{
		alert("Producto no existe");
	}	
}

function agregarVenta(productosVendido){
	productosAgregados.push(productosVendido);
	document.getElementById("tbodyTabla1").innerHTML += '<td>'+productosVendido.codigo+'</td><td>'+productosVendido.nombre+'</td><td>'+productosVendido.cantidad+'</td>'
	
}
function vaciarArreglo(){
	const $elemento = document.getElementById("tbodyTabla1");
	$elemento.innerHTML = "";
}

function vaciarTablaProductosDisponibles(){
	const $elemento = document.getElementById("tbodyExistencias");
	$elemento.innerHTML = "";
}


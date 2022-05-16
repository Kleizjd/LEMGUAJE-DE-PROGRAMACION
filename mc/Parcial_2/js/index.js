const users = [
    {user:'Damian',pass:'123damian'},
    {user:'Marina',pass:'Mari321'},
    {user:'Juan',pass:'123456J'},
    {user:'Jose',pass:'J0s3'}
];

function capturar(){
	let usuario = document.getElementById("usuario").value;
	let contrasena= document.getElementById("contrasena").value;
	
	let resultado = users.find((element) => element.user===usuario);

    if(resultado === null || resultado === undefined){
        alert("Usuario o contraseña incorrecto");  
    }else{
        if(resultado.user == usuario && resultado.pass == contrasena)
            alert("Bienvenido "+ resultado.user +   " sus datos son correcto");
        else
            alert("Usuario o contraseña incorrecto");          
    }
}

let numeroAleatorios = [];

function numeros(){
    let numero = document.getElementById("numero").value;

    if(numero >= 1 && numero <= 1000){
        numeroAleatorios =Array.from({length: numero}, () => Math.floor(Math.random() * 10));

        numeroAleatorios.map((elemento) => {
            if(esPrimo(elemento)){
                console.log("Numero primo " + elemento);
                document.getElementById("numeroPrimo").innerHTML += 'Numero primo '+elemento+ '\n';
            }
            
            if(par(elemento)){
                console.log("Numero par " + elemento);
                document.getElementById("numeroPar").innerHTML += 'Numero par '+elemento + '\n';
            }
                
            else{
                console.log("Numero impar " + elemento);
                document.getElementById("numeroImpar").innerHTML += 'Numero impar '+elemento + '\n';
            }
            
            
        })

        console.log("Numero maximo " + maximo(numeroAleatorios));
        document.getElementById("numeroMaximo").innerHTML += 'Numero maximo '+ maximo(numeroAleatorios);

    }else
        alert("El número ingresado no esta en el rango");  
}

function esPrimo(numero) {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

function par(nuumero){
    if (parseInt(nuumero)%2 == 0) 
        return true;
    else
        return false;
}

function maximo(numero){
    var mayor = 0;
 
    for(i = 0; i < numero.length; i++){
        if (numero[i] > mayor)
        {
            mayor = numero[i];
        }
    }
    return mayor;
}


let operandoa;
let operandob;
let operacion;


function init() {
	let resultado =document.getElementById("resultado");
	let suma =document.getElementById("suma");
	let resta =document.getElementById("resta");
	let multi =document.getElementById("multi");
	let dividir =document.getElementById("dividir");
	let igual =document.getElementById("igual");
	let uno =document.getElementById("uno");
	let dos =document.getElementById("dos");
	let tres =document.getElementById("tres");
	let cuatro =document.getElementById("cuatro");
	let cinco =document.getElementById("cinco");
	let seis =document.getElementById("seis");
	let siete =document.getElementById("siete");
	let ocho =document.getElementById("ocho");
	let nueve =document.getElementById("nueve");
	let cero =document.getElementById("cero");

	uno.onclick= function(e) {
		resultado.textContent = resultado.textContent + "1"
	}
	dos.onclick= function(e) {
		resultado.textContent = resultado.textContent + "2"
	}
	tres.onclick= function(e) {
		resultado.textContent = resultado.textContent + "3"
	}
	cuatro.onclick= function(e) {
		resultado.textContent = resultado.textContent + "4"
	}
	cinco.onclick= function(e) {
		resultado.textContent = resultado.textContent + "5"
	}
	seis.onclick= function(e) {
		resultado.textContent = resultado.textContent + "6"
	}
	siete.onclick= function(e) {
		resultado.textContent = resultado.textContent + "7"
	}
	ocho.onclick= function(e) {
		resultado.textContent = resultado.textContent + "8"
	}
	nueve.onclick= function(e) {
		resultado.textContent = resultado.textContent + "9"
	}
	cero.onclick= function(e) {
		resultado.textContent = resultado.textContent + "0"
	}

	suma.onclick= function(e) {
		operandoa= resultado.textContent;
		operacion= "+";
		limpiar();
	}
	resta.onclick= function(e) {
		operandoa= resultado.textContent;
		operacion= "-";
		limpiar();
	}
	multi.onclick= function(e) {
		operandoa= resultado.textContent;
		operacion= "*";
		limpiar();
	}
	dividir.onclick= function(e) {
		operandoa= resultado.textContent;
		operacion= "/";
		limpiar();
	}
	igual.onclick= function(e) {
		operandob= resultado.textContent;

		resolver();
	}
	reinicio.onclick= function(e) {
		resetear();
	}
}

function limpiar() {
	resultado.textContent= "";
}

function resolver() {
	let res = 0;
	switch (operacion){
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;
		case "-":
			res = parseFloat(operandoa) - parseFloat(operandob);
			break;
		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;
		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}

	resultado.textContent = res;

}

function resetear() {
	resultado.textContent= "";
	operandoa="";
	operandob="";

}



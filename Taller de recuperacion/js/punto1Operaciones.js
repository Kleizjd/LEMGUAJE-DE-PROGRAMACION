var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');

class Operaciones{

    suma(a,b){
        var i = 0;
        while(i != b){
            a++;
            i++;
        }
        return a;
    }
    resta(a,b){
        var i = b;
        while(i != 0){
            a--;
            i--;
        }
        return a;
    }
    mutlipicacion(a,b){
        var sumaSucesiva = a;
        var i = 1;
        while(i < b){
            a = parseInt(sumaSucesiva) + parseInt(a);
            i++;
        }
        return a;
    }
    division(divisor,cociente){
        var resta = divisor - cociente;
        var i = 0;
        if(resta >= 0){
            while(resta >= 0){
                resta = resta - cociente;
                i++;
            }
            return i;
        } else {
            return "No es posible dividir por este numero";
        }
    }
}

operacion = new Operaciones();
var a = 20;
var b = 5;
alert("Operaciones Matematicas")
a = prompt("Primera Variable");
b = prompt("Segunda Variable");
suma.innerHTML = " SUMA: " + operacion.suma(a,b);
resta.innerHTML = " RESTAR : " + operacion.resta(a,b);
multiplicacion.innerHTML = " MULTIPLICACION : " + operacion.mutlipicacion(a,b);

// multiplicacion.innerHTML = operacion.multiplicacion(a,b);
division.innerHTML =  " DIVIDIR : "+operacion.division(a,b);
console.log("SUMA: "+ a +" + "+b+" = "+ operacion.suma(a,b));
console.log("RESTA: "+ a +" - "+b+" = "+operacion.resta(a,b));
console.log("MULTIPLICACION: "+ a +" * "+b+" = "+operacion.mutlipicacion(a,b));
console.log("DIVISION : "+ a +" / "+b+" = "+operacion.division(a,b));
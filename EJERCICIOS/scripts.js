// # Archivo: scipts2.py
// # Autor: Jose Daniel Grijalba Osorio
// # Fecha: 6/03/2022
// # Descripción: Taller Funcionesy tipos de datos
  //Taller resuelto
  var arrOne = [];
  do {
    var key = prompt(
      "        UNIVERSIDAD AUNAR  \n" +
        "1). Llenar arreglo de forma aleatoria.\n" +
        "2). Ordenar arreglo de menor a menor.\n" +
        "3). Numero menor y mayor del arreglo.\n" +
        "4). Numeros pares del arreglo.\n" +
        "5). Numeros impares del arreglo.\n" +
        "6). Numeros Primos de la lista.\n" +
        "7). diferencia entre estas fechas 2022-02-27 8:00:00, 2022-02-28 9:00:00.\n" +
        "8). Calcula tu IMC.\n" +
        "9). Distancia de un punto a otro\n" +
        "10). EL arreglo collatz.\n" +
        "                                    Digite la opcion de entrada"
    );
  
    switch (key) {
      case "1":
          //1
          var size = prompt("Ingrese el tamaño");
          var arrOne = [];
          max = 10;
          min = 1;
          for (var i = 0; i < size; i++) {
          arrOne.push(Math.floor(Math.random() * (max - min)) + min);
          }
          console.log("lista Aleatoria", arrOne);
          prompt("lista Aleatoria", arrOne);
        break;
      case "2":
        // 2.
        console.log("lista ordenada", arrOne.sort());
        prompt("lista ordenada", arrOne.sort());
        break;
      case "3":
        // 3.
        var menor = Math.min.apply(null, arrOne);
        var mayor = Math.max.apply(null, arrOne);
        console.log("Menor: ", menor, "y Mayor: ", mayor);
        prompt("Menor: "+menor+" y Mayor: "+mayor);
        break;
      case "4":
        //4
        for (var i = 0; i < size; i++) {
          par = arrOne[i];
          if (par % 2 == 0) {
            console.log("El numero : ", par, " es par");
            prompt("El numero : "+par+" Es par");
          }
        }
        break;
      case "5":
        for (var i = 0; i < size; i++) {
          par = arrOne[i];
          if (par % 2 != 0) {
            console.log("El numero : ", par, "impar");
            prompt("El numero : "+par+" es impar");
          }
        }
        break;
      case "6":
        //6.
        const esPrimo = numero => {
          // Casos especiales
          if (numero == 0 || numero == 1 || numero == 4) return false;
          for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
          }
          // Si no se pudo dividir por ninguno de los de arriba, sí es primo
          return true;
        }
        arrOne.forEach((numero) => {
          console.log("%d", numero, (esPrimo(numero) == true) ? 'es primo' : 'no es primo');
        });
        
        arrOne.forEach(element => prompt(element, (esPrimo(element) == true) ? 'es primo' : 'no es primo'));
        break;
      case "7":
        case "7":
          //7
          var ano= "", mes = "" ,dia = "" , hora = "", date = [], fecha = [];
          var respuesta = prompt("ya hay una fecha establecida, desea calcular otra. (S/N)");
          if(respuesta.toUpperCase() == "s".toUpperCase()){
          
          for (var i = 0; i < 2; i++){
              ano = prompt("Ingrese el año");
              mes = prompt("Ingrese el mes");
              dia = prompt("Ingrese el dia");
              hora = prompt("Ingrese la hora en punto");
            date[i] = ano+"-"+mes+"-"+dia+" "+hora+":00:00";
            fecha[i] = new Date(date[i]);
          }
    
          var diferenciaAño = fecha[1].getYear() - fecha[0].getYear();
          var diferenciaMes = fecha[1].getMonth() - fecha[0].getMonth();
          var diferenciaDia = fecha[1].getDate() - fecha[0].getDate();
          var diferenciaHora = fecha[1].getHours() - fecha[0].getHours();
        
          prompt("la diferencia entre las fechas es de: "+diferenciaAño+" Año(s) "+diferenciaMes+" Mes(es)"+ diferenciaDia," dia(s) y "+diferenciaHora+" hora(s)");
            console.log("la diferencia entre las fechas es de:",diferenciaAño," Año(s), ",diferenciaMes," Mes(es), ", diferenciaDia,"dia(s) y",diferenciaHora,"hora(s)");
          } else {
              fecha[0] = new Date("2022-02-27 8:00:00");
              fecha[1] = new Date("2022-02-28 9:00:00");
              var diferenciaDia = fecha[1].getDate() - fecha[0].getDate();
              var diferenciaHora = fecha[1].getHours() - fecha[0].getHours();
            console.log("la diferencia entre las fechas es de:", diferenciaDia,"dia y",diferenciaHora,"hora");
            prompt("la diferencia entre las fechas es de: "+diferenciaDia+" dia y "+diferenciaHora+" hora");
        }
          
          break;
        case "8":
          //8
          peso = prompt("Ingrese su peso");
          estatura = prompt("Ingrese su estatura") * 100;
          with (Math) {
          imc = peso / pow(estatura / 100, 2);
          imc = round(imc * 100) / 100; // redondea con 2 decimales.
          }
          if (imc < 16) {
              grado = "bajo de peso";
            } else if (imc >= 18.5 && imc <= 24.99) {
              grado = "Normal.";
            } else if (imc >= 25 && imc <= 29.99) {
              grado = "sobrepeso .";
            } else if (imc >= 30 && imc <= 34.99) {
              grado = "Obesidad.";
            }
            resultado = imc + " : " + grado;
            console.log(resultado);
            prompt(resultado);
        break;
      case "9":
        // latitud y longitud, se mide en codenadas x y
        x1 = prompt("Ingrese 1ra posición en x");
        y1 = prompt("Ingrese 1ra posición en y");
        x2 = prompt("Ingrese 2ra posición en x");
        y2 = prompt("Ingrese 2ra posición en y");
        console.log("latitud y longitud, se mide en codenadas x y");
        console.log("la distancia es: ", getDistanciaMetros(y1, x1, y2, x2)+" metros");
        prompt("la distancia es: ", getDistanciaMetros(y1, x1, y2, x2)+" metros");
        break;
      case "10":
          //10
            let collatzTail = (numero, almacena) => {
              //si numero es 1 entonces alamacena 1
              if (numero === 1) {
                  almacena.push(1);
                  return almacena;
                  //si numero es incluso entonces alamacena numero / 2
              } else if (numero % 2 === 0) {
                  almacena.push(numero);
                  return collatzTail(parseInt(numero / 2), almacena);
                  //si numero es impar entonces almacenar numero * 3 + 1
              } else {
                  almacena.push(numero);
                  return collatzTail(3 * numero + 1, almacena);
              }
            };
          let almacena = [];
          var numero = prompt("Ingrese un numero a realizar la secuencia Collatz");
          collatzTail(numero, almacena);
          console.log(almacena);
          prompt(almacena);
        break;
      default:
        prompt("La opción no existe");
        prompt("No mas 'Good luck'");
        break;
    }
  } while (key <= 10); 
  
  function getDistanciaMetros(y1, x1, y2, x2) {
    rad = function (calcular) { return (calcular * Math.PI) / 180;};
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(y2 - y1);
    var dLong = rad(x2 - x1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(y1)) * Math.cos(rad(y2)) * Math.sin(dLong / 2) *Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    //aquí obtienes la distancia en metros por la conversion 1Km =1000m
    var d = R * c * 1000;
    return d;
  }
  
  
  
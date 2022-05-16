let miarray = [];
console.log("Dime el tamaño del array");
var stdin = process.openStdin();

stdin.addListener("data",(data)=>{
    console.log("Pregunta 1: Mostrar Array");
    miarray = Array.from({length: data}, () => Math.floor(Math.random() * 10));
    miarray.forEach(function(item,index,arr){
        console.log(item);
    });
    console.log("\n")
    ordenar(miarray);
    console.log("\n")
    maximo(miarray);
    console.log("\n")
    pares(miarray);
    console.log("\n")
    impares(miarray);
    console.log("\n")
    primos(miarray);
    console.log("\n")
    calculoFechas("02-27-2022 8:00:00","02-28-2022 9:00:00");
    console.log("\n")
    CalcularIMC("90","175");
    console.log("\n")
    calculoDistancias(1,5,2,6);
})

function ordenar (data){
    console.log("Pregunta 2: Arreglo ordenado")
    console.log(data.sort());
}

function maximo (data){
    console.log("Pregunta 3: Valor Maximo del arreglo: " + Math.max.apply(null, data));
}

function pares(data){
    console.log("Pregunta 4: Números pares del array")
    data.map((data)=>{
        if((data %2) ==0){
            console.log('par  ',data);
        }
    })
}

function impares(data){
    console.log("Pregunta 5: Números impares del array")
    data.map((data)=>{
        if(data%2!=0){
            console.log('impar  ',data);
        }
    })
}

function primos(data){
    console.log("Pregunta 6: Números primos del array")
    data.map((data)=>{
        if (data == 0 || data == 1 || data == 4){}
        for (let x = 2; x < data / 2; x++) {
            if (data % x == 0){}else{
                console.log("número primo: " + data)
            }
        }
    })
}

function calculoFechas(Dato1,Dato2){
    console.log("Pregunta 7: Calculo de fechas")

    var date1 = new Date(Dato1);
    var date2 = new Date(Dato2);

    console.log(date2 + " "+ date1);
    var DifMiliSegundos = (date2.getTime() - date1.getTime());
    var days = parseInt(DifMiliSegundos / 86400000);
    var hours = parseInt(DifMiliSegundos / 3600000 );
    var minutes = parseInt(DifMiliSegundos / 1000 / 60);
    var seconds = (DifMiliSegundos / 1000);

    console.log("Milisegundos: " + DifMiliSegundos);
    console.log("seconds: " + seconds);
    console.log("minutes: " + minutes);
    console.log("hours: " + hours);
    console.log("days: " + days);
}

function CalcularIMC (Peso,Altura){
    console.log("Pregunta 8: Calculo de IMC")
    if(Peso != "" && Altura != ""){
        Altura = Math.round(Altura) / 100;
        Peso = Math.round(Peso);
        let IMC = (Peso / Math.pow(Altura, 2));
        if(IMC<18.5){ console.log(IMC.toFixed(2) + " Peso inferior al normal"); }
		else if(IMC>=18.5 && IMC<=24.9){ console.log(IMC.toFixed(2) + " Peso normal"); }
		else if(IMC>=25 && IMC<=29.9){ console.log(IMC.toFixed(2) + " Peso superior al normal"); }
		else if(IMC>30){ console.log(IMC.toFixed(2) + " Obesidad"); }
    }else{console.log(IMC.toFixed(2) + " Debe ingresar el peso y la altura");}
}

function calculoDistancias (EjeX1,EjeX2,EjeY1,EjeY2){
    console.log("Pregunta 9: Calculo la distancia entre dos puntos")
    console.log("La distancia entre los puntos es: " + Math.sqrt(Math.abs((((EjeY1-EjeX1)*(EjeY1-EjeX1)) + ((EjeY2-EjeX2)*(EjeY2-EjeX2))))));
}
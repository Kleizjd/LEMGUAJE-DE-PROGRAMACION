//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultCalculadora = document.getElementById('resultCalculadora');
    var reiniciar = document.getElementById('reiniciar');
    var adicion = document.getElementById('adicion');
    var sustraccion = document.getElementById('sustraccion');
    var multiplicacion = document.getElementById('multipli');
    var split = document.getElementById('split');
    var equals = document.getElementById('equals');
    var numerouno = document.getElementById('numerouno');
    var numerodos = document.getElementById('numerodos');
    var numerotres = document.getElementById('numerotres');
    var numerocuatro = document.getElementById('numero');
    var numerocinco = document.getElementById('numerocinco');
    var numeroseis = document.getElementById('numeroseis');
    var numerosiete = document.getElementById('numerosiete');
    var numeroocho = document.getElementById('numeroocho');
    var numeronueve = document.getElementById('numeronueve');
    var numero = document.getElementById('numero');
  }

  //Eventos de click
  numerouno.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "1";
}
numerodos.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "2";
}
numerotres.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "3";
}
numerocuatro.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "4";
}
numerocinco.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "5";
}
numeroseis.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "6";
}
numerosiete.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "7";
}
numeroocho.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "8";
}
numeronueve.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "9";
}
numerocero.onclick = function(e){
    resultCalculadora.textContent = resultCalculadora.textContent  + "0";
}
reiniciar.onclick = function(e){
    reiniciar();
}
adicion.onclick = function(e){
    operandoa = resultCalculadora.textContent;
    operacion = "+";
    limpiar();
}
sustraccion.onclick = function(e){
    operandoa = resultCalculadora.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultCalculadora.textContent;
    operacion = "*";
    limpiar();
}
split.onclick = function(e){
    operandoa = resultCalculadora.textContent;
    operacion = "/";
    limpiar();
}
equals.onclick = function(e){
    operandob = resultCalculadora.textContent;
    resolver();
}

function limpiar(){
    resultCalculadora.textContent = "";
  }
  
  function reiniciar(){
    resultCalculadora.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
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
    reiniciarear();
    resultCalculadora.textContent = res;
  }

  generar.onclick = function() {
    var  tamanoLado = parseInt(document.getElementById("tamanoLado").value, 8);
    let minaArray = [];
    let buscaMinas = [];

  
    var mina = document.getElementById('mina');
    mina.innerHTML = "";

    mina.innerHTML += "\n|============[ Mina ]================|\n";
    for (var i = 0; i <= tamanoLado; i++) {
            // Crea un espacio nuevo
            minaArray.push([]);
            // Añade columnas en el espacio:
            minaArray[i].push( new Array(tamanoLado));

            buscaMinas.push([]); 
            buscaMinas[i].push( new Array(tamanoLado));

            var j=0
            while( j <= tamanoLado ){
            
              if(j < tamanoLado && i < tamanoLado){
                minaArray[i][j] = Math.floor(Math.random() * (1 - (-1))) + (-1);
                buscaMinas[i][j] =  minaArray[i][j];
              } else {
                buscaMinas[i][j] = 0;
              }
              j++
            }
            if(i < tamanoLado){
              mina.innerHTML += " |"+minaArray[i]+"| ";
            }
     mina.innerHTML += "\n";
  
    }
    
  mina.innerHTML += "\n|======[ minaDescubierta ]=====|";
  console.log(buscaMinas);
  var minaDescubierta = document.getElementById('minaDescubierta');
  minaDescubierta.innerHTML = "";
  for (var i = 0; i < tamanoLado; i++) {//filas 
    for (var j = 0; j < tamanoLado; j++) {//columnas
      //=============[  Diagonal derecha   ]================================
      if (buscaMinas[i][j] != -1 && buscaMinas[i][j] > buscaMinas[i + 1][j + 1] && buscaMinas[i + 1][j + 1] < 0  ) {
        //lado delantero
          buscaMinas[i][j] += 1;
        }
      if (buscaMinas[i + 1][j + 1] != -1 && buscaMinas[i + 1][j + 1] > buscaMinas[i][j] && buscaMinas[i][j] < 0) {
      //lado de atras
        buscaMinas[i + 1][j + 1] += 1;
      }
      //=============[  Diagonal Izquierda   ]================================
      if (buscaMinas[i][j + 1] != -1 && buscaMinas[i][j + 1] > buscaMinas[i + 1][j] && buscaMinas[i + 1][j] < 0) {
        // lado delantero
        buscaMinas[i][j + 1] += 1;
      }
      if (buscaMinas[i + 1][j] != -1 && buscaMinas[i + 1][j] > buscaMinas[i][j + 1] && buscaMinas[i][j + 1] < 0) {
        // lado de atras
        buscaMinas[i + 1][j] += 1;
      }
      //=============[ verticales   ]================================
      if (buscaMinas[i][j] != -1 && buscaMinas[i + 1][j] < 0 && buscaMinas[i][j] > buscaMinas[i + 1][j]) {
        //abajo
        buscaMinas[i][j] += 1;
      }
      if (buscaMinas[i + 1][j] != -1 && buscaMinas[i][j] < 0 && buscaMinas[i + 1][j] > buscaMinas[i][j] ) {
        //arriba
        buscaMinas[i + 1][j] += 1;
      }
      //=============[ horizontales   ]================================
      if (buscaMinas[i][j] != -1 && buscaMinas[i][j - 1] < 0 && buscaMinas[i][j] > buscaMinas[i][j - 1]) {
        //izquierda   
          buscaMinas[i][j] += 1;
        }
      if (buscaMinas[i][j] != -1 && buscaMinas[i][j] > buscaMinas[i][j + 1] && buscaMinas[i][j + 1] < 0 ) {
        //derecha
        buscaMinas[i][j] += 1;
      }
      if(j == tamanoLado-1){
        buscaMinas[i].pop();
      }
    }
        minaDescubierta.innerHTML += " |"+buscaMinas[i]+"|\n";
  }
      minaDescubierta.innerHTML += "\n";
}

// let array = [[],[],[],[],[]];

  // const array = [
  //   [0, 0, -1, -1, 0],
  //   [0, 0, -1, 0, 0],
  //   [0, 0, 0, -1, 0],
  //   [0, 0, 0, -1, 0],
  //   [0, 0, 0, 0, 0],
  // ];


  generar.onclick = function() {
  var  tamanoLado = parseInt(document.getElementById("tamanoLado").value, 8)+1;
  // let array = [tamanoLado+1];
  let array = [];

  var mina = document.getElementById('mina');
  mina.innerHTML += "\n|============[ Mina ]================|\n";
  for (var i = 0; i < tamanoLado-1; i++) {
          // Creates an empty line
          array.push([]);

          // Adds cols to the empty line:
          array[i].push( new Array(tamanoLado));
          for(var j=0; j < tamanoLado-1; j++){
            // Initializes:
            array[i][j] = Math.floor(Math.random() * (1 - (-1))) + (-1);
            
          }
          mina.innerHTML += " |"+array[i]+"| ";

  mina.innerHTML += "\n";

  }
  mina.innerHTML += "\n|======[ minaDescubierta ]=====|";

  var minaDescubierta = document.getElementById('minaDescubierta');

  for (var i = 0; i < tamanoLado-1; i++) { 
    for (var j = 0; j < tamanoLado-1; j++) {
      //HORIZONTAL
      //DERECHA
      if (array[i][j]>array[i][j+1] && array[i][j+1]<0 && array[i][j]!=-1) {
        array[i][j] += 1;
      }                                
      //IZQUIERDA     
      if (array[i][j]>array[i][j-1] && array[i][j-1]<0 && array[i][j]!=-1) {
        array[i][j] += 1;
      }
      //VERTICAL
      //ARRIBA
      if (array[i+1][j]>array[i][j] && array[i][j]<0 && array[i+1][j]!=-1) {
        array[i+1][j] += 1;
      }                                
      //ABAJO
      if (array[i][j]>array[i+1][j] && array[i+1][j]<0 && array[i][j]!=-1) {
        array[i][j] += 1;
      }      
      //DIAGONALES DIRECION DERECHA
      //ADELANTE
      if (array[i][j]>array[i+1][j+1] && array[i+1][j+1]<0 && array[i][j]!=-1) {
        array[i][j] += 1;
      }
      //ATRAS
      if (array[i+1][j+1]>array[i][j] && array[i][j]<0 && array[i+1][j+1]!=-1) {
        array[i+1][j+1] += 1;
      }
      //DIAGONALES DIRECION IZQUIERDA
      // ADELANTE
      if (array[i][j+1]>array[i+1][j] && array[i+1][j]<0 && array[i][j+1]!=-1) {
        array[i][j+1] += 1;
      }
      //ATRAS
      if (array[i+1][j]>array[i][j+1] && array[i][j+1]<0 && array[i+1][j]!=-1) {
        array[i+1][j] += 1;
        // console.log(array[i][j]);
      }
      minaDescubierta.innerHTML += " |"+array[i][j]+"| ";
      
      // document.write(" [",array[i][j],"]")
    }
      
  
   
    minaDescubierta.innerHTML += "\n";
    
  }
 
  minaDescubierta.innerHTML += "\n";
  
  
  return array;
}




  
  
// c = crear_campo((4,4),5);
// descubrir(c)

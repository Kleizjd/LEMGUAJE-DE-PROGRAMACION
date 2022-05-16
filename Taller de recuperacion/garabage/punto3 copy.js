let array = [[],[],[],[],[]];

  // const array = [
  //   [0, 0, -1, -1, 0],
  //   [0, 0, -1, 0, 0],
  //   [0, 0, 0, -1, 0],
  //   [0, 0, 0, -1, 0],
  //   [0, 0, 0, 0, 0],
  // ];


  generar.onclick = function() {
  let  numFiCo = document.getElementById("tamanoLado").value;
  var nfilas = numFiCo;
  var nColums = numFiCo;
  let min = -1, max = 1;
  
  for (var i = 0; i < nfilas-1; i++) {//filas 
    for (var j = 0; j < nColums-1; j++) {//columnas
      // var num = prompt("["+i+","+j+"]"+'. Ingrese un numero:',"");
      array[i].push(Math.floor(Math.random() * (max - min)) + min)
      document.write(" [",array[i][j],"] ")
      // document.write("["+i+","+j+"]")
    }
    document.write("<br>");
  }
  document.write("<br>");

  for (var i = 0; i < 4; i++) {//filas 
    for (var j = 0; j < 4; j++) {//columnas
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
  
      document.write(" [",array[i][j],"]")
    }
      
  
    document.write("<br>");
  }
  document.write("<br>");
  
  // return array;
}




  
  
// c = crear_campo((4,4),5);
// descubrir(c)

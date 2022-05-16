function esMagico(magico,tamano){

    let numMagico = 0;
    for (let index=0; index<tamano; index++) {
        numMagico += magico[2][index];
    }//sumo la 3ra fila


    let sumaDiagonal1 = 0, sumaDiagonal2 = 0;
    for (let i=0; i<tamano; i++) {
        let sumaFila = 0, sumaCol = 0;
        for (let j=0; j<tamano; j++) {
            sumaFila += magico[i][j];
            sumaCol += magico[j][i];
        }
        if ( sumaFila!=numMagico ||sumaCol!=numMagico ) {
            console.log("NO es un cuadrado magico");
            return false;
        }
        sumaDiagonal1 += magico[i][i];
        sumaDiagonal2 += magico[tamano-1-i][tamano-1-i];
    }
    if ( sumaDiagonal1!=numMagico ||sumaDiagonal2!=numMagico ) {
        console.log("NO es un cuadrado magico");
        return false;
    }

    console.log("Es un cuadrado magico");
    return true;
 
}
const magico = [[2,7,6],
               [9,5,1],
               [4,3,8]];

const tamano = 3;

esMagico(magico,tamano);

//declaración del Array 
const array = [[2,7,6],
               [9,5,1],
               [4,3,8]];

//La dimension del array
const N = 3;

magico(array,N);

function magico(array,N){
    // //suma elementos primera fila
    let numMagico = 0;
    for (let j=0; j<N; j++) {
        numMagico += array[0][j];
    }

    let sumaDiag1 = 0, sumaDiag2 = 0;
    for (let i=0; i<N; i++) {
        let sumaFila = 0, sumaCol = 0;
        for (let j=0; j<N; j++) {
            sumaFila += array[i][j];
            sumaCol += array[j][i];
        }
        if ( sumaFila!=numMagico ||sumaCol!=numMagico ) {
            console.log("NO es un cuadrado magico");
            return false;
        }
        sumaDiag1 += array[i][i];
        sumaDiag2 += array[N-1-i][N-1-i];
    }
    if ( sumaDiag1!=numMagico ||sumaDiag2!=numMagico ) {
        console.log("NO es un cuadrado magico");
        return false;
    }

    console.log("Es un cuadrado magico");
    return true;
    console.log(array);
}
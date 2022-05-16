// const semana = [["LUNES",20,30,50],
//                 ["MARTES",30,20,60],
//                 ["MIERCOLES",30,20,60],
//                 ["JUEVES",30,30,32]
//                 ["VIERNES",30,30,32] ];
    var semana = [4][4];
    semana.push("LUNES")
    semana.forEach(item =>{
        console.log("dia "+item)
    });

// ["liquido","precio"]
const precios = [
  ["Vino", 5],
  ["Ginebra", 45],
  ["Jugo de limon", 10],
];

precioBaldes(baldes, precios);
// PreciosBaldes2B();
function precioBaldes(baldes, precios) {
  var baldeA = 0;
  var baldeB = 0;
  var baldeC = 0;
  for (var j = 0; j < 3; j++) {
    precio = parseInt(precios[j][1]);
    balde = parseInt(baldes[0][j + 1]);
    baldeA += balde * precio;
  }
  for (let j = 0; j < 3; j++) {
    precio = parseInt(precios[j][1]);
    balde = parseInt(baldes[1][j + 1]);
    baldeB += balde * precio;
  }

  for (let j = 0; j < 3; j++) {
    precio = parseInt(precios[j][1]);
    balde = parseInt(baldes[2][j + 1]);
    baldeC += balde * precio;
  }
  console.log("Balde A " + baldeA);
  console.log("Balde B " + baldeB);
  console.log("Balde C " + baldeC);
}

// function PreciosBaldes2B(baldes, precios) {
//     let PVino = 0;
//     let PGinebra = 0;
//     let PLimon = 0;
//     let TotalA = 0;
//     let TotalB = 0;
//     let TotalC = 0;

//     for(i=0; i< precios.length;i++){
//         if(precios[0][i]=="vino"){
//             PVino = precios[i];
//         }
//         if(precios[0][i]=="ginebra"){
//             PGinebra = precios[i];
//         }
//         if(precios[0][i]=="jugoLimon"){
//             PLimon = precios[i];
//         }
//     }

//     for(i=0; i< baldes.length;i++){
//         if(baldes[i].balde=="A"){
//             TotalA = (baldes[i].vino * PVino)+(baldes[i].ginebra * PGinebra)+(baldes[i].jugoLimon * PLimon);
//         }
//         if(baldes[i].balde=="B"){
//             TotalB = (baldes[i].vino * PVino)+(baldes[i].ginebra * PGinebra)+(baldes[i].jugoLimon * PLimon);
//         }
//         if(baldes[i].balde=="C"){
//             TotalC = (baldes[i].vino * PVino)+(baldes[i].ginebra * PGinebra)+(baldes[i].jugoLimon * PLimon);
//         }
//     }
// ]

//     console.log("15 Baldes del  A " + TotalA*15);
//     console.log("40 Baldes del B " + TotalB*40);
//     console.log("28 Baldes del C " + TotalC*28);
// }

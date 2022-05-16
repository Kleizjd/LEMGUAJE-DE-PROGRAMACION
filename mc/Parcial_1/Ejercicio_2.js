const baldes = [
  {
    balde: "A",
    vino: 20,
    ginebra: 30,
    jugoLimon: 50,
  },
  {
    balde: "B",
    vino: 30,
    ginebra: 20,
    jugoLimon: 60,
  },
  {
    balde: "C",
    vino: 30,
    ginebra: 30,
    jugoLimon: 32,
  },
];

const precios = [
  {
    liquido: "vino",
    precio: 5,
  },
  {
    liquido: "ginebra",
    precio: 45,
  },
  {
    liquido: "jugoLimon",
    precio: 10,
  },
];

precioBaldes(baldes, precios);
PreciosBaldes2(baldes, precios);
function precioBaldes(baldes, precios) {
  let PVino = 0;
  let PGinebra = 0;
  let PLimon = 0;
  let TotalA = 0;
  let TotalB = 0;
  let TotalC = 0;

  for (i = 0; i < precios.length; i++) {
    if (precios[i].liquido == "vino") {
      PVino = precios[i].precio;
    }
    if (precios[i].liquido == "ginebra") {
      PGinebra = precios[i].precio;
    }
    if (precios[i].liquido == "jugoLimon") {
      PLimon = precios[i].precio;
    }
  }

  for (i = 0; i < baldes.length; i++) {
    if (baldes[i].balde == "A") {
      TotalA =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
    if (baldes[i].balde == "B") {
      TotalB =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
    if (baldes[i].balde == "C") {
      TotalC =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
  }

  console.log("Balde A " + TotalA);
  console.log("Balde B " + TotalB);
  console.log("Balde C " + TotalC);
}

function PreciosBaldes2(baldes, precios) {
  let PVino = 0;
  let PGinebra = 0;
  let PLimon = 0;
  let TotalA = 0;
  let TotalB = 0;
  let TotalC = 0;

  for (i = 0; i < precios.length; i++) {
    if (precios[i].liquido == "vino") {
      PVino = precios[i].precio;
    }
    if (precios[i].liquido == "ginebra") {
      PGinebra = precios[i].precio;
    }
    if (precios[i].liquido == "jugoLimon") {
      PLimon = precios[i].precio;
    }
  }

  for (i = 0; i < baldes.length; i++) {
    if (baldes[i].balde == "A") {
      TotalA =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
    if (baldes[i].balde == "B") {
      TotalB =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
    if (baldes[i].balde == "C") {
      TotalC =
        baldes[i].vino * PVino +
        baldes[i].ginebra * PGinebra +
        baldes[i].jugoLimon * PLimon;
    }
  }

  console.log("15 Baldes del  A " + TotalA * 15);
  console.log("40 Baldes del B " + TotalB * 40);
  console.log("28 Baldes del C " + TotalC * 28);
}

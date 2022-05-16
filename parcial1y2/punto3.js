// Una fábrica de autos produce tres modelos: sedán, camioneta y económico. Cada auto necesita para su producción materiales, personal, impuestos y transporte. Los costos en unidades por cada concepto son los siguientes
var cantCamionetas, cantSedan, cantEconomic;
var costMaterial, costImpuestos, costTransporte, costPersonal;

cantEconomic = 150;
cantCamionetas = 30;
cantSedan = 90;
costoUnidad = [10, 15, 9, 3];
console.log("1. Costo de las unidades semanales necesarias");
console.log(
  "Material: " +
    costoUnidad[0] * 7 +
    " Personal: " +
    costoUnidad[1] * 7 +
    " Impuestos: " +
    costoUnidad[2] * 7 +
    " Impuestos: " +
    costoUnidad[3] * 7 +
    " "
);
var array = [
  [7, 5, 5],
  [10, 9, 7],
  [5, 3, 2],
  [2, 3, 1],
];
var acumSedan = 0;
var acumCamioneta = 0;
var acumEconomico = 0;
var costoTotal = 0;
for (var j = 0; j < array.length; j++) {
  acumSedan += array[j][0];
  acumCamioneta += array[j][1];
  acumEconomico += array[j][2];
}

console.log("2. El costo total de un auto de cada modelo  ");
console.log("Costo total de un sedan: ", acumSedan);
console.log("Costo total de un Camioneta: ", acumCamioneta);
console.log("Costo total de un Economico: ", acumEconomico);
console.log("3. El costo total semanal es de: ", costoTotal * 7);
costoTotal = acumSedan + acumCamioneta + acumEconomico;

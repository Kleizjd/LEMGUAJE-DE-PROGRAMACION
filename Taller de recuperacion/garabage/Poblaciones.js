
// let city = 600, sub  = 400;
let city = 600, sub  = 400;
document.write(`<br>`)
document.write(`a)<br>`)

document.write(`Año   Ciudad   Suburbios<br>`);
for (let i = 2012; i <= 2021; i++) {
  let citySeVa = city * 0.05; 
  let subSeQueda = sub * 0.97;
  let totalSub = subSeQueda + citySeVa;
  let subSeVa =  sub * 0.03;
  let citySeQueda = city * 0.95;
  let totalCity = citySeQueda + subSeVa;
  city = totalCity.toFixed(3);
  sub = totalSub.toFixed(3);

  document.write(`${i}   ${city} ${sub}<br>`);
}
// document.write(`<br>`)
// document.write(`b)<br>`)
// document.write(`Año   Ciudad   Suburbios<br>`);
// let mFueraRegionToCity = 14000;
// let abandonaRegion = 9000;
// let mFueraCityToSub = 13000;

// for (let i = 2012; i < 2021; i++) {
//   city *= stay_city; 
//   city += mFueraRegionToCity; 
//   city = city.toFixed(3);
  
//   sub/= stay_sub; 
//   sub -= mFueraCityToSub; 
//   sub = sub.toFixed(3);

//   document.write(`${i}   ${city}  ${sub} ${abandonaRegion}<br>`);
//   // const element = array[i];
// }
alert("Cuales son las poblaciones del Ano 2011 en adelante")
// ===============[ punta A ]=======================
  var poblacionSuburbios  = 400;
  var poblacionCiudad = 600;
// ================[ punta B ]=====================
  var mudanFueraRegionACiudad = 14000;
  var abandonaRegion = 9000;
  var mudanAnualmente = 13000;
// ==============================================
  let total = 0;
  var poblacionCiudadB = 0;

  poblacionCiudad = prompt("Poblacion Ciudad")
  poblacionSuburbios = prompt("Poblacion Suburbios")

      // m = 1/100[95/5*3/97]
  var tabla = document.getElementById('poblaciones');
  var tabla2 = ""
  tabla.innerHTML += "|===========================|\n";
  tabla.innerHTML += "| AÑO  | CIUDAD | SUBURBIOS |\n";
  tabla.innerHTML += "|===========================|\n";

  for (let i = 2012; i <= 2021; i++) {
    let ciudadViaja = (poblacionCiudad * 5)/100; 
    let decienEstarSuburbuios = (poblacionSuburbios * 97)/100;
    let totalSuburbios = decienEstarSuburbuios + ciudadViaja;
    poblacionSuburbios = totalSuburbios.toFixed(3);
    let suburbioViaja =  (poblacionSuburbios * 3)/100;
    let decidenEstarCiudad = (poblacionCiudad * 95)/100;
    let totalCiudad = decidenEstarCiudad + suburbioViaja;
    poblacionCiudad = totalCiudad.toFixed(3);

    tabla.innerHTML += "| "+i+" |  "+poblacionCiudad+"  | "+poblacionSuburbios+"|\n";
  }
  tabla.innerHTML += "|===========================|\n";
  var tabla = document.getElementById('puntob');
  tabla2+= "|===============================================================================================|\n";
  tabla2 += "| AÑO  |  SE MUDA DE REGION A CIUDAD | DE LA CIUDAD A FUERA REGION | ANUALMENTE A LOS SUBURBIOS |\n";
  tabla2 += "|==============================================================================================|\n"; 
  tabla.innerHTML += tabla2;

  for (let i = 2012; i <= 2021; i++) {
  // =========================================================
    // region a ciudad
    poblacionCiudadB += mudanFueraRegionACiudad;
    // abandodan cuidad afuera
    let afueraRegion = poblacionCiudadB - abandonaRegion;
    // ciudad a los suburbios
    let afueraRegionSuburbios = poblacionCiudadB - mudanAnualmente;
    tabla.innerHTML += "| "+i+" |            "+poblacionCiudadB+"            |          "+afueraRegion+"               |           "+afueraRegionSuburbios+"          |\n";

  }
  tabla.innerHTML += "|===============================================================================================|\n";

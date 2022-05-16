// const horarioArray =  [{"Lunes":["","","","",""]},
//                        {"Martes":["","","","",""]},
//                        {"Miercoles":["","","","",""]},
//                        {"Jueves":["","","","",""]},
//                        {"Viernes":["","","","",""]}];
                       var horarioArray = [{ lunes: []}, {martes: []}, {miercoles: []}, {jueves: []}, {viernes: [] }];


console.log("LLenar Horario");

for(var dia in horarioArray) {
   console.log(" DIA = " + Object.keys(horarioArray[dia]));
   break;
   console.log(" esto = " + horarioArray[dia])
   var i = 0;
   for(var elemento in horarioArray[dia]){
      //  if(horarioArray[dia][elemento] != ""){
        //  var horario = prompt("Ingrese la Materia ")
        // horarioArray[dia][elemento] = horario;
        i++;
        console.log("\n i = " + horarioArray[dia][elemento]+"\n");
        // console.log("\n Hora = " + horarioArray[dia][elemento]+"\n");
      //  }
   }
}
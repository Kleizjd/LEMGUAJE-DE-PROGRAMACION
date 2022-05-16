// class horario{
//     hora = 0;
//     dia = ""
//     asignatura = "";

// }
// horarioArray = [{"Lunes":[]},{"Martes":2},{"Miercoles":3},{"Jueves":4},{"Viernes":5},];
//              ["balde","vino","ginebra","jugod de limon"],
// const horarioArray =  [{"Lunes":[{"1":"esto es"},{"2":""},{"3":""},{"4":""},{"5":""}]}];
// const horarioArray =  [["Lunes", "","","","","",""],
//                         ["Martes","","","","","",""],
//                         ["Miercoles","","","","","",""],
//                         ["Jueves","","","","","",""],
//                         ["Viernes","","","","","",""]];
const horarioArray =  [{"Lunes":["","","","",""]},
                       {"Martes":["","","","",""]},
                       {"Miercoles":["","","","",""]},
                       {"Jueves":["","","","",""]},
                       {"Viernes":["","","","",""]}];

console.log("LLenar Horario");
for(var dia in horarioArray) {
   console.log(" DIA = " + Object.keys(horarioArray[dia]));
   for(var elemento in horarioArray[dia]){
       if(horarioArray[dia][elemento] != ""){
         var horario = prompt("Ingrese la Materia ")
        horarioArray[dia][elemento] = horario;
        console.log("\n Hora = " + horarioArray[dia][elemento]+"\n");
       }
   }
}


// for(var elemento in horarioArray.length){
//     //  if(horarioArray[dia][elemento] != ""){
//       //  var horario = prompt("Ingrese la Materia ")
//       // horarioArray[dia][elemento] = horario;
//       i++;
//       console.log("\n i = " + horarioArray[dia][elemento]+"\n");
//       // console.log("\n Hora = " + horarioArray[dia][elemento]+"\n");
//     //  }
//  }
var array = []
array.push({
  mensajes: ["hola", "stack"]
})

var mensajes = []; //arreglo que tendrá los mensajes recorridos

array.forEach((item) => { //Recorro primer arreglo
  //Luego recorro la propiedad mensajes dentro del arreglo
  item.mensajes.forEach((mensaje) => {
    // Obtengo cada mensaje de la propiedad y la guardo en mi arreglo de mensajes
    mensajes.push(mensaje);
  });
});

// Imprimo todos los mensajes en el html
var mensajesDom = document.getElementById('mensajes');
mensajesDom.innerHTML = mensajes;
<pre id="mensajes">
  
</pre>
// hora = horarioArray[dia][elemento];
// hora = process.openStdin();

// hora.addListener("data",(data)=>{
//     console.log("you entered: [" +data.toString().trim() + "]");
//     });





// horarioArray.forEach(contenido => contenido.forEach(dentro => console.log(dentro)))
// horarioArray.forEach(contenido => console.log(contenido))

// var horarioFull = horarioArray.map((element, index) => {
//     console.log(element.Lunes);

//     var h = [];
//     h = element;
//     h.map(element => {
//     console.log(element.uno);

//     })
    // var primeraH =
// var hora = process.openStdin();

// hora.addListener("data",(data)=>{
//     console.log(index);
//     miarray = Array.from({length: data}, () => Math.floor(Math.random() * 10));
//     miarray.forEach(function(item,index,arr){
//         console.log(item);
//     });
   
// })
// });


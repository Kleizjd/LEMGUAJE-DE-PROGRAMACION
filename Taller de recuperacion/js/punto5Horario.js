var horario = [{ lunes: [], martes: [], miercoles: [], jueves: [], viernes: [] }];

    var cant = 0;
    var mensajesDom = document.getElementById('dias');
    mensajesDom.innerHTML += "______________________________________________________\n";

    mensajesDom.innerHTML += "|    LUNES   |";
    horario.map((item) => {

        cant = prompt("Cantidad de Materias")
        var i = 0;
        while (i < cant) {
            let materia = prompt("LUNES| ingrese asignatura N:" + i)
            item.lunes.push(materia);
            mensajesDom.innerHTML += materia + "|";

            i++;
        }
    mensajesDom.innerHTML += "\n|____________|_________________________________________|\n";

        var i = 0;
        mensajesDom.innerHTML += "\n|   Martes   |";
        while (i < cant) {
            let materia = prompt("Martes| ngrese asignatura N:" + i)
            item.martes.push(materia);
            mensajesDom.innerHTML += materia + "|";
            i++;
        }
    mensajesDom.innerHTML += "\n|____________|_________________________________________|\n";
        var i = 0;
        mensajesDom.innerHTML += "\n| Miercoles  |";
        while (i < cant) {
            let materia = prompt("Miercoles| ingrese asignatura N:" + i)
            item.miercoles.push(materia);
            mensajesDom.innerHTML += materia + "|";
            i++;
        }
        mensajesDom.innerHTML += "\n|____________|_________________________________________|\n";

        var i = 0;
        mensajesDom.innerHTML += "\n|   Jueves   |";
        while (i < cant) {
            let materia = prompt("Jueves| ingrese asignatura N:" + i)
            item.jueves.push(materia);
            mensajesDom.innerHTML += materia + "|";
            i++;
        }
        mensajesDom.innerHTML += "\n|____________|_________________________________________|\n";

        var i = 0;
        mensajesDom.innerHTML += "\n|   Viernes  |";
        while (i < cant) {
            let materia = prompt("Viernes| ingrese asignatura N:" + i)
            item.viernes.push(materia);
            mensajesDom.innerHTML += materia + "|";
            i++;
        }
    mensajesDom.innerHTML += "\n|____________|_________________________________________|\n";

    });
    console.log(horario);

    function diaClasesTemprano() {
        
        temprano = false;
        for (let i = 0; i < cant; i++) {
            var lunesHora = horario[0].lunes[i], martesHora = horario[0].martes[i], miercolesHora = horario[0].miercoles[i], juevesHora = horario[0].jueves[i], viernesHora = horario[0].viernes[i];
            if (lunesHora != "" && lunesHora > martesHora && lunesHora > miercolesHora && lunesHora > juevesHora && lunesHora > viernesHora) {
                alert('El dia con clases mas temprano es el Lunes')
                break;
            } else if (martesHora != "" && martesHora > lunesHora && martesHora > miercolesHora && martesHora > juevesHora && martesHora > viernesHora) {
                alert('El dia con clases mas temprano es Martes ')
                break;
            } else if (miercolesHora != "" && miercolesHora > lunesHora && miercolesHora > martesHora && miercolesHora > juevesHora && miercolesHora > viernesHora) {
                alert('El dia con clases mas temprano es Miercoles ')
                break;
            } else if (juevesHora != "" && juevesHora > lunesHora && juevesHora > martesHora && juevesHora > miercolesHora && juevesHora > viernesHora) {
                alert('El dia con clases mas temprano es Jueves ')
                break;
            } else if (viernesHora != "" && viernesHora > lunesHora && viernesHora > martesHora && viernesHora > miercolesHora && viernesHora > juevesHora) {
                alert('El dia con clases mas temprano es Viernes ')
                break;
            } else {
                temprano = true;
            }

        }
        if(temprano) {
            alert('No hay dia con clases mas temprano')
        }
    }
    function diaMaxClases() {
        horario.map((item) => {
            var lunes = 0;
            item.lunes.forEach((elemento) => { if (elemento != '') { lunes++; } });
            var martes = 0;
            item.martes.forEach((elemento) => { if (elemento != '') { martes++; } });
            var miercoles = 0;
            item.miercoles.forEach((elemento) => { if (elemento != '') { miercoles++; } });
            var jueves = 0;
            item.jueves.forEach((elemento) => { if (elemento != '') { jueves++; } });
            var viernes = 0;
            item.viernes.forEach((elemento) => { if (elemento != '') { viernes++; } });

            if (lunes > martes && lunes > miercoles && lunes > jueves && lunes > viernes) {
                alert('El dia con mas clases es el Lunes')
            } else if (martes > lunes && martes > miercoles && martes > jueves && martes > viernes) {
                alert('El dia con mas clases es el Martes')
            } else if (miercoles > lunes && miercoles > martes && miercoles > jueves && miercoles > viernes) {
                alert('El dia con mas clases es el Miercoles')
            } else if (jueves > lunes && jueves > martes && jueves > miercoles && jueves > viernes) {
                alert('El dia con mas clases es el Jueves')
            } else if (viernes > lunes && viernes > martes && viernes > miercoles && viernes > jueves) {
                alert('El dia con mas clases es el Viernes')
            } else {
                alert('No hay dia con mayor numero de clases, o hay dos o mas con la misma cantidad ')
            }
            console.log(viernes);
        });
    }

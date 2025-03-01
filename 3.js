let tecnologia;
let opcionUno;
let opcionDos = [];
let area = prompt('¿En que area quieres empezar Front-end o Back-end?');
const tecnologiasDiv = document.getElementById('tecnologiasAdicionales');

while (area) {
    if (area == 'Front-end') {
        tecnologia = prompt('que quieres aprender React o Vue?');
        alert('Buen comienzo con ' + tecnologia);
        opcionUno = prompt('¿especializarte con ' + tecnologia + '(Digita [E]) o ser Full-Stack?(Digita[F])');
        if (opcionUno == 'E') {
            alert('Buena suerte continua aprendiendo');
            let otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            while (otraTecnologia !== "Ninguna") {
                tecnologiasDiv.innerHTML += `<p> ${otraTecnologia}</p>`;
                opcionDos.push(otraTecnologia);
                otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            }
            area = null;
        } else if (opcionUno == 'F') {
            alert('Buena elección vamos por más!');
            let otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            while (otraTecnologia !== "Ninguna") {
                tecnologiasDiv.innerHTML += `<p> ${otraTecnologia}</p>`;
                opcionDos.push(otraTecnologia);
                otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            }
            area = null;
        } else {
            alert('Solo las 2 opciones disponibles!');
        }
    } else if (area == 'Back-end') {
        tecnologia = prompt('que quieres aprender C# o Java?');
        alert('Buen comienzo con ' + tecnologia);
        opcionUno = prompt('¿especializarte con ' + tecnologia + '(Digita [E]) o ser Full-Stack?(Digita[F])');
        if (opcionUno == 'E') {
            alert('Buena suerte continua aprendiendo');
            let otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            while (otraTecnologia !== "Ninguna") {
                tecnologiasDiv.innerHTML += `<p> ${otraTecnologia}</p>`;
                opcionDos.push(otraTecnologia);
                otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            }
            area = null;
        } else if (opcionUno == 'F') {
            alert('Buena elección vamos por más!');
            let otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            while (otraTecnologia !== "Ninguna") {
                tecnologiasDiv.innerHTML += `<p> ${otraTecnologia}</p>`;
                opcionDos.push(otraTecnologia);
                otraTecnologia = prompt('¿que otra tecnologia te gustaria conocer? (Escribe "Ninguna" para terminar)');
            }
            area = null;
        } else {
            alert('Solo las 2 opciones disponibles!');
        }
    } else {
        alert('Escoge una de las 2 opciones');
        area = null;
        location.reload();
    }
}
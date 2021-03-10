var inputPiedra = document.getElementById("choice-piedra");
var inputPapel = document.getElementById("choice-papel");
var inputTijeras = document.getElementById("choice-tijeras");
inputPiedra.addEventListener("click", jugarPiedra);
inputPapel.addEventListener("click", jugarPapel);
inputTijeras.addEventListener("click", jugarTijeras);
function jugarPiedra() {
    var aleatorio = Math.floor(Math.random()*(4-1)) + 1;
    switch (aleatorio) {
        case 1:
            alert("Escogiste piedra, pero la pc también... Empate ._.");
            break;
        case 2:
            alert("Escogiste piedra, La pc sacó papel: PERDISTE! JA!");
            break;
        case 3:
            alert("Escogiste piedra, La pc sacó tijeras: GANASTE! :D");
            break;
    }
}
function jugarPapel() {
    var aleatorio = Math.floor(Math.random()*(4-1)) + 1;
    if (aleatorio === 1) {
        alert("Escogiste papel, La pc sacó piedra: GANASTE! :D");
    } else if (aleatorio === 2) {
        alert("Escogiste papel, pero la pc también... Empate ._.");
    } else {
        alert("Escogiste papel, La pc sacó tijeras: PERDISTE! JA!");
    }
}
function jugarTijeras() {
    var aleatorio = Math.floor(Math.random()*(4-1)) + 1;
    if (aleatorio === 1) {
        alert("Escogiste tijeras, La pc sacó piedra: PERDISTE! JA!");
    } else if (aleatorio === 2) {
        alert("Escogiste tijeras, La pc sacó papel: GANASTE! :D");
    } else {
        alert("Escogiste tijeras, pero la pc también... Empate ._.");
    }
}

// var op1 = "Piedra";
// var op2 = "Papel";
// var op3 = "Tijera";
// var resultado = function(user, cpu){
//     if (user != cpu){
//         if (
// 		(user === op1 && cpu === op3) || 
// 		(user === op2 && cpu === op1) || 
// 		(user === op3 && cpu === op2) 
//         ){
//             console.log("el usuario GANO")
//         }
//         else{
//             console.log("La CPU Gano!!")
//         }
//     }
//     else if(user === cpu){
//         console.log("Empate")
//     }
// }



/* Piedra: 0, papel: 1 o tijera: 2
//  parámetros: p = persona, pc = computadora */
// function jugar(p, pc) {
//     switch (true) {
//         case p === pc:
//             console.log("Empate");
//             break;
//         case (p === 0 && pc !== 1) || (p === 1 && pc !== 2) || (p === 2 && pc !== 0):
//             console.log("Ganas");
//             break;
//         default:
//             console.log("Pierdes");
//             break;

// var opciones = ['Piedra', 'Papel', 'Tijera'];
// var maquina = opciones[parseInt(Math.random() * 3)];
// var usuario = ""
// var jugar = 1;

// function Validar(usuario) {

//     switch (usuario) {
//         case opciones[0]:
//             return Juego(usuario, maquina);
//             break;
//         case opciones[1]:
//             return Juego(usuario, maquina);
//             break;
//         case opciones[2]:
//             return Juego(usuario, maquina);
//             break;
//         default:
//             console.log('El valor escrito no es valido.')
//             console.log('Intentalo otra vez.')
//             break;
//     }

// }

// function Juego(opcion1, opcion2) {

//     if (opcion1 === opcion2) {
//         return 'Es un empate'
//     }
//     else if (opcion1 === 'Piedra' && opcion2 === 'Tijera') {
//         return `Ganasate: ${opcion1} le gana a ${opcion2}`
//     }
//     else if (opcion1 === 'Papel' && opcion2 === 'Piedra') {
//         return `Ganasate: ${opcion1} le gana a ${opcion2}`
//     }
//     else if (opcion1 === 'Tijera' && opcion2 === 'Papel') {
//         return `Ganasate: ${opcion1} le gana a ${opcion2}`
//     } else {
//         return `Perdiste: ${opcion2} le gana a ${opcion1}`
//     }

// }

// while (jugar === 1) {
    
//     usuario = prompt('Para jugar ingresa: Piedra, Papel o Tijera: ')
//     console.log(`La maquina escogio ${maquina}`)
//     console.log(`Tu escogiste ${usuario}`)
//     console.log(Validar(usuario))
//     jugar = parseInt(prompt('Para jugar otra vez escribe 1 de lo contrario preciona 0: '))
// }
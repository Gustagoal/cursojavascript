// Par ou ímpar

// let numero = 51

// for(var i = 0; i<numero; i++){
//     if (i % 2 === 0){
//         console.log(`Número ${i}`)
//     }
// }
 const numerosPares = []; for (let i = 0; i < 10; i++) { const numeroPar = i % 2 === 0; if (numeroPar) { numerosPares.push(i); } } console.log(numerosPares);
// Programa calculo de viagem
// node exercicio-dio.js  - Para rodar no terminal 
let combustivel = 6.14

let gasto_medioKM = 10

let distancia_km = 100

let litros_consumidos = distancia_km/gasto_medioKM

let valor = combustivel * litros_consumidos

console.log("O valor gasto nessa viagem foi de "+  valor.toFixed(2)  +" R$") // toFixed arrendondamento
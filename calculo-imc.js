// Calculo de IMC
// Formula IMC // imc = peso/(altura*altura)
// IMC TABELA
// Abaixo de 18.5 abaixo do peso
// Entre 18.5 e 25 peso normal
// Entre 25 e 30 Acima do peso
// Entre 30 e 40 Obeso
// Acima de 40 Obsesidade Grave

let peso = 70
let altura = 1.70

let imc = peso/(altura*altura)

if (imc<18.5){
    console.log("Abaixo do peso")
    console.log("IMC " + imc.toFixed(2))
}
else if (imc >= 18.5 >=imc >= 25){
    console.log("Peso normal")
    console.log("IMC " + imc.toFixed(2))
}
else if (25>= imc >= 30){
    console.log("Acima do peso")
    console.log("IMC " + imc.toFixed(2))
}
else if (30 >= imc >= 40){
    console.log("Obeso")
    console.log("IMC " + imc.toFixed(2))
}
else if (imc > 40){
    console.log("Obsidade grave")
    console.log("IMC " + imc.toFixed(2))
}

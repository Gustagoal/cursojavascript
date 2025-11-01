// Calcular a média de notas

let nota1 = 2
let nota2 = 2
let nota3 = 2

const media = (nota1+nota2+nota3)/3

if (media>7){
    console.log("Passou de semestre")
    console.log("Média " + media)
}
else if(media<=5){
    console.log("Reprovou")
    console.log("Média " + media)

}
else if (media){
    console.log("Recuperação")
    console.log("Média " + media)

}
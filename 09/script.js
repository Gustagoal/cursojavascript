function verificar(){
    var resultado = document.getElementById('res')
    var autorizar = document.getElementById('idade')
    var idade1 = Number(autorizar.value)
    if (idade1>= 18) {
        alert('Autorizado')
    }
}
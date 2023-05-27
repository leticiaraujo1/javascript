function gerar() {
    var n = document.getElementById('num')
    var res = document.getElementById('res')
    res.innerHTML = 'Resultado: <br>'
    

    if (n.value.length == 0) {
        window.alert('ERRO!')
    } else {
        for (var i = 0; i <= 10; i++) {
        var num = Number(n.value)
        res.innerHTML += `${num}` + '*' + `${i} =` + i*num + '<br>'

        }
    }
}




function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var passo = Number(p.value)

    if ( i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('ERRO. Verifique os dados e tente novamente')
    } else if (passo <= 0) {
        window.alert('Impossivel contar! Considerando passo 1.')
        passo = 1
    } else {
        var r = document.getElementById('resultado')
        r.innerHTML = 'Contando: '

        var fim = Number(f.value)
        var passo = Number(p.value)

    for(var inicio = Number(i.value); inicio <= fim; inicio += passo ) {
        r.innerHTML += `${inicio}` + ' 👉 '
    } 
    r.innerHTML += '🏁'
}
}

/*Tive muitas dificuldades nesse exercício mas acho que a principal foi não
lembrar que tinha que colocar o place holder e o += dentro do inner.html.
Também fico mto confusa as vezes com o local de botar algumas variáveis*/

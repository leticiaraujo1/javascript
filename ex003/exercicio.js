var vet = []

function adicionar() {
    var n = document.getElementById('num')
    var num = Number(n.value)
    var add = document.getElementById('add')

    if (n.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else if (num < 1 || num>100) {
        window.alert('Verifique os dados e tente novamente!')
    } else if (vet.indexOf(num) != -1) {
        window.alert('O número já foi adicionado. Escreva outro!')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado!`
        add.appendChild(item)
        vet.push(num)  
    }
    n.value = ''
    n.focus() //isso serve pra nao ter q ficar clicando dnv no input pra escrever um novo numero
    }

function verificar() {
    if (vet.length == 0) {
        window.alert('Por favor, digite os números antes de finalizar!')
    } else {
    vet.sort()
    var res = document.getElementById('res') 
    var soma = 0
    for (var i = 0; i < vet.length; i++) {
        soma += vet[i];
    }
    var media = soma/vet.length
    res.innerHTML = `<p>Os números cadastrados foram: ${vet} <p>` 
    res.innerHTML += `<p>Ao todo, temos ${vet.length} números cadastrados <p>`
    res.innerHTML += `<p>O maior valor informado foi ${vet[vet.length - 1]} <p>`
    res.innerHTML += `<p>O menor valor informado foi ${vet[0]} <p>`
    res.innerHTML += `<p>A soma dos valores é ${soma} <p>`
    res.innerHTML += `<p>A média dos valores é ${media} <p>`
}
}

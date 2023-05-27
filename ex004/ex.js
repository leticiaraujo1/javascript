function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotos/fotomanha.png'
        document.body.style.background = '#91b4ad'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/fototarde.png'
        document.body.style.background = '#e59780'
    } else {
        img.src = 'fotos/fotonoite.png'
        document.body.style.background = '#193052'
    }
}

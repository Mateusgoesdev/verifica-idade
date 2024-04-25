function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('inasc')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebeM.jpg')
            } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto bebeF.jpg')
            } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovemF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e possui ${idade} anos.`
        res.appendChild(img)
    }

    

}
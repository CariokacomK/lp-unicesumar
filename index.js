const tipoAcao = document.querySelector('.tipo-acao')

tipoAcao.addEventListener('changed', () => {
    const nomeAcao = document.querySelector('.nome-acao')
    const nomeAcaoAppear = nomeAcao.classList.contains('appear')
    if (nomeAcaoAppear) {
        nomeAcao.classList.remove('appear')
    }else{
        nomeAcao.classList.add('appear')
    }
})




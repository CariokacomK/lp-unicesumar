//APARECER CURSOS DE ACORDO COM OPÇÃO DO RADIO
const unidadeRadios = document.getElementsByName('unidade');
const cursos = document.querySelectorAll('.cursos');

for (let i = 0; i < unidadeRadios.length; i++) {
    unidadeRadios[i].addEventListener('change', () => {
        for (let j = 0; j < cursos.length; j++) {
            cursos[j].classList.remove('aparecer');
        }

        if (unidadeRadios[i].checked) {
            cursos[i].classList.add('aparecer');
        }
    });
}

// APARECER DIV NOME DA AÇÃO
const tipoAcao = document.getElementsByTagName('select')
const nomeAcao = document.getElementsByClassName('nome-acao')

tipoAcao[6].addEventListener('change', () => {
    nomeAcao[0].classList.add('aparecer')
})









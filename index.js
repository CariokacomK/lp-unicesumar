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

// TOOL TIP HOVER
const tollTip = document.querySelectorAll('.tooltip')
const descricaoTollTip = document.querySelectorAll('.desc-tooltip')

for (let i = 0; i < tollTip.length; i++) {
    tollTip[i].addEventListener('mouseenter', () =>{
        for (let j = 0; j < descricaoTollTip.length; j++) {
            descricaoTollTip[i].classList.remove('aparecer')
        }

        descricaoTollTip[i].classList.add('aparecer')
    }) 

    tollTip[i].addEventListener('mouseleave', () =>{
        descricaoTollTip[i].classList.remove('aparecer')
    })
}

// CLICAR TOOL TIP E ABRIR UM NOVO INPUT
const cursoNaoOfertado = document.getElementsByClassName('curso-nao-ofertado')
console.log(tollTip);

for (let i = 0; i < tollTip.length; i++) {
    tollTip[i].addEventListener('click', () =>{
        cursoNaoOfertado[0].classList.add('aparecer');
    })
}

//CPF COM 11 DIGITIOS

const cpf = document.getElementById('cpf');

cpf.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }

    if (this.value.length <= 3) {
        this.value = this.value.replace(/(\d{0,3})/, '$1');
    } else if (this.value.length <= 6) {
        this.value = this.value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    } else if (this.value.length <= 9) {
        this.value = this.value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (this.value.length <= 11) {
        this.value = this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    }
});

//TELEFONE COM 11 DIGITOS

const telefone = document.getElementById('telefone');

telefone.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }

    if (this.value.length <= 2) {
        this.value = this.value.replace(/(\d{0,2})/, '($1)');
    } else if (this.value.length <= 7) {
        this.value = this.value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (this.value.length <= 11) {
        this.value = this.value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
});
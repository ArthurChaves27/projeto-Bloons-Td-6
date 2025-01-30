const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) {
        cartaoAtual = -1
    }
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) {
        cartaoAtual = 7
    }
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})


function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}


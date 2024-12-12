let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo: Número secreto do Thiago');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

console.log(numeroSecreto);
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','Acertou!');
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        let maiorMenor = chute > numeroSecreto ? 'menor':'maior'
        let msgMaiorMenor = `O número é ${maiorMenor} que ${chute}! Você usou ${tentativas} ${palavraTentativa}`;
    
            exibirTextoNaTela ('h1',msgMaiorMenor);
            tentativas++;
        }
        }
        
        limparCampo()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite)
        listaNumerosSorteados = [];

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
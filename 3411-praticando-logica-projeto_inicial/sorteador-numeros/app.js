function sortear() {
    let quantidadeNumeros = parseInt (document.querySelector('#quantidade').value)
    let numeroInicialDo = parseInt(document.querySelector('#de').value);
    let numeroFinalAte = parseInt(document.querySelector('#ate').value);
    console.log (numeroInicialDo);
    console.log (numeroFinalAte);
    console.log (quantidadeNumeros);

    verificarNumero(numeroInicialDo, numeroFinalAte, quantidadeNumeros);
}

function verificarNumero(numeroInicialDo, numeroFinalAte, quantidadeNumeros) {
    let listaNumerosSorteados = [];

for (let sorteador = 0; sorteador < quantidadeNumeros; sorteador++) //loop que fica gerando o número 
{
    let escolhido = parseInt(Math.random() * (numeroFinalAte - numeroInicialDo + 1)) + numeroInicialDo;
    
    if (listaNumerosSorteados.includes(escolhido)){
        sorteador--; //nao deixa numero repetido
    } else {
    listaNumerosSorteados.push(escolhido); //adiciona na lista o numero escolhido
    }
}
let textoNumeros = listaNumerosSorteados.join(", "); //transforma a string em texto
console.log (textoNumeros);

let elementoResultado = document.querySelector('#resultado .texto__paragrafo');
elementoResultado.innerText = `Números sorteados: ${textoNumeros}`;
}
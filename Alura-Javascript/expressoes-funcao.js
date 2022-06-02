//declaração de função

//===(3 vezes) é igual a comparação
//== quer dizer igual
//= quer dizer recebe

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param")

// expressão de função

// const soma = function(num1, num2) {return num1 + num2 }
// console.log(soma(1, 1))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar() {
    return "olá";
}

console.log(soma(1, 1))
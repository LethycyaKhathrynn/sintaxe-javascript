
console.log(escopoLocalInterno);

function funcao(){
    console.log('tudo okay')
}
funcao();

var funcao = function funcao() {
    console.log('função de expressão')
}
funcao();


var funcao = () => {
    console.log('arrow')
}

funcao();


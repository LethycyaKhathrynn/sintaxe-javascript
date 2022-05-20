function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao >=7 || operacao <1) {
        alert('Erro - operação inválida');
        calculadora();
    } else {

let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

if (!n1 || !n2) {
    alert('Erro - parâmetros inválidos');
    calculadora();
} else {

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperação();
}

function subtração() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperação();
}

function multiplicação() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperação();
}

function divisãoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperação();
}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    novaOperação();
}

function potenciação() {
    resultado = n1 ** n2;
    alert(`${n1} elevado ${n2} é igual a ${resultado}`);
    novaOperação();
}

function novaOperação() {
    let opcao = prompt ('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Então tchau');
    } else {
        alert ('Digite uma operação válida');
        novaOperação();
        }
    } 
}
} /*

if (operação == 1) {
    soma();
}else if (operação == 2) {
    subtração();
}else if (operação == 3){
    multiplicação();
}else if (operação == 4){
    divisãoReal();    
}else if (operação == 5){
    divisaoInteira();
}else if (operação == 6){
    potenciação();
} */

switch (operacao) {
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisaoReal();
        break;
    case 5:
        divisaoInteira();
        break;
    case 6:
        potenciacao();
        break;
}
}
calculadora(); 
//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

//string
var nome = 'Lethycya';
console.log(typeof(nome));

//como declarar

var variavel = 'diana';
variavel = 'wonder';
console.log(variavel);

let variavel2 = 'Lethycya';
variavel2 = 'Khathrynn';
console.log(variavel2);

const constante = 'Ana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal()

//atribuição

var atribuição = 'Lethycya';

//comparação

var comparação = '0' == 0;
console.log(comparação);

var comparaçãoIdêntica = '0' === 0;
console.log(comparaçãoIdêntica);

//aritméticos

var adição = 1 + 1;
console.log(adição);

var subtração = 2 - 1;
console.log(subtração);

var multiplicação = 2 * 3;
console.log(multiplicação);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

//relacionais

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 6 < 3;
console.log(menorQue);

var maiorOuIgual = 5 >= 10;
console.log(maiorOuIgual);

var menorOuIgual = 5 <=5;
console.log(menorOuIgual);

//lógicos

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = ! true;
console.log(nao);

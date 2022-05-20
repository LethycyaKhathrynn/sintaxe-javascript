//Vetores ou Arrays

//let array = ['string',1,true];
//console.log(array);

let array2 = ['string',1,true, ['array1'], ['array2'], ['array3']];
// console.log(array2[0]);

//forEach
//array2.forEach(function(item, index){console.log(item, index)});

//array2.push('novo item');
//console.log(array2);

//array2.pop();
//console.log(array2);

//array2.shift();
//console.log(array2);

//array2.unshift('new');
//console.log(array2);

//console.log(array2.indexOf(true));

//array2.splice(0, 3);
//console.log(array2);

//let novoArray = array2.slice(0, 3);
//console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array:['array'], objectInterno: { objectInterno: 'objeto Interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean,objectInterno);





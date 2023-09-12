//funciones en Javascripts

//funcion sin parametros y sin retornos 
function saluda(){
    console.log('Holaaa!');
}
saluda();

//Funcion con parametros y sin retrono
function addOne(num){
    console.log(`el ${num} + 1 = ${num + 1}`);
}
addOne(15);

//funccion con parametros y con retorno
function suma(num1, num2){
    return num1 + num2;
}
const result = suma(12,34);
console.log(result);

//funciones como  constantes 
//funciones anonimas 
const resta = function (num1, num2) {
    return num1 - num2;
}
const resultado = resta(12, 2);
console.log(resultado);

//Funciones de Flecha Arrow Functions
(param1, param2) => {
    //code 
    //return
}

const duplica = (num) => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplica numeros');
    return num1 * num2;
}

const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13, 26);
console.log(resultM);

//Simplificando Arrow Functions
let cambiaMinusculas = (word) => {
    return word.toLowerCase();
}

//Si solo es un unico parametro se pueden omitir parentesis 
//Si la unica linea es el return se pueden omitir llaves y return 
cambiaMinusculas = word => word.toLowerCase();


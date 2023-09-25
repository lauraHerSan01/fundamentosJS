const resultado = document.getElementById('resultado');
const inputFood = document.getElementById('itemFood');
//Arrays en Javascript
//Coleccion ordenanda de datos 

//Declaracion o inicializacion 
const enteros = new Array(1, 2, 3, 4, 5, 6);
console.log(enteros);
console.log(enteros[0]); //ultimo .lenght -1
enteros[0] = 10;
enteros[2] *= 2;
console.log(enteros);

const fruits = ['apple', '🍌', '🍒', '🍄'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //Numero de elemetos 
fruits[0] = '🍎';
console.log(fruits);
resultado.innerText = fruits.join('-');


//Metodos para agregar/ eliminar elemntos 
const food = [];
food.push('🍳'); //push insertar al final 
food.push('🥖');
food.push('🌮');
food.unshift('🥓'); //Unshift inserta al inicio 
food.unshift('🍤');
food.unshift('🍩');
console.log(food);

let itemFood = food.pop() //Extraemos del final
console.log(itemFood);
itemFood = food.shift(); //Extraemos del inicio
console.log(itemFood);
console.log(food);

const showLista=() => {
//Ciclo for para Interar arrays
let listaHtml = ''
for(let i =0; i< food.length; i++){
    listaHtml += `<li>${ food[i] }</li>`;
}

    //
    console.log(listaHtml);
const ulFood = document.getElementById('comida');
ulFood.innerHTML = listaHtml;
}
const addFruit = () => {
    const fruit = inputFood.value;
    food.push(fruit);
    inputFood.value = '';
    showLista();
}
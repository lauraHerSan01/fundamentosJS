const fruit = ['apple', 'orange', 'melon', 'water melon'];

console.log('for');
//recorrido con for
for (let i=0; i < fruit.length; i++){
    console.log(fruits [i]);
}

console.log('for of');
//recorrido con for of 
for(const fruit of fruits){
    console.log(fruit);
}

//Iteradores dde Arrays
//forEach()
console.log('forEach con arrow function');
fruits.forEach(
    function (fruit){
        console.log(fruit);
    }
);

fruits.forEach(
    (fruit)=>{
        console.log(fruit);
    }
);

// Strings 
const firstName = 'Laura';
const lastName = "Hernandez";
const fullName = firstName + "" + lastName;

console.log("I'm"  + firstName);
console.log('I\'m' + firstName);

console.log(fullName);

//Strings multilinea 
const menu = `
elige:
1- Opcion 1
2- Opcion 2
3- Opcion 3
`;

console.log(menu);

//String Templates
// placeholder ${ }

const city = 'Huamantla';
const phone = '2761171716';
const rol = 'Alumno';

const prentation = `
Hola 
soy ${fullName}, ${rol} en la Utt
Vivo en ${city}
Te puedes comunicar conmigo al numero ${phone}
`;

console.log(prentation);

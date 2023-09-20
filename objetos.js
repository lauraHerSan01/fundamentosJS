//objetos
/*
objeto ={
    key: value,
    key: value
}

objeto .key
objeto['key']
*/


const subject = {
    name: 'Aplicaciones WEeb',
    cuatri: 3,
    profesor: 'Francisco',
    classroom: 'Lab Redes I',
    'total hours': 70,
    weekHours: 5
}

console.log(subject);
console.log(subject.name);
console.log(subject.profesor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.profesor='Francisco Lopez';
subject.career= 'TIADSM';
console.log(subject);

const student = {
    name :'Laura Alicia',
    age: 21,
    calificaciones: [10, 10,8],
    city: 'Apizaco'
}

const group ={
    name: '4B',
    students: [student, student, student],
    subjects: [subject, subject, subject]
}
console.log(group);
console.log(group.subjects[0].profesor);
console.log(group.students[1].calificaciones);
console.log(group.students[2].calificaciones[0]);
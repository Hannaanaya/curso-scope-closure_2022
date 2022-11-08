//variables

var a; //declarando
var b = 'b'; //declaración / asignación/inicialización
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración

//Scope Global
var fruit = 'Apple';

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);
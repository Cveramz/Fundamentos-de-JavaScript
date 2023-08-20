/* Funciones en Javascript */

// Declarativas

function hello(){
    console.log("Hello");
}

hello();

function hellouser(nombre){
    console.log("Hello " + nombre);
}

hellouser("Juan");


// Expresión o anónimas

var bye = function(){
    console.log("Bye");
}

bye();

var sumar = function(a, b){
    return a + b;
}

console.log(sumar(1, 2));

// arrow functions

var multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(2, 3));

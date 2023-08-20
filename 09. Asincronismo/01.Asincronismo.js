/* Asincronismo en JavaScript*/

// setTimeout(): es una función asíncrona, sirve para ejecutar un bloque de código después de un tiempo determinado

console.log('Trabajo 1');
console.log('Trabajo 2');
console.log('Trabajo 3');
setTimeout(() => {
    console.log('Trabajo 4');
}, 1);
console.log('Trabajo 5');

// ¿Que pasó con el trabajo 4? ¿Por qué se ejecutó al final?
/*
    El trabajo 4 se ejecutó al final porque el setTimeout() es una función asíncrona,
    es decir, que no se ejecuta en el orden en el que se encuentra en el código,
    sino que se ejecuta cuando el proceso principal haya terminado.

    En este caso, el proceso principal es la ejecución de los trabajos 1, 2, 3 y 5.
    Cuando estos terminan, se ejecuta el trabajo 4.

*/


// Callbacks: es una función que se pasa como parámetro a otra función,
//y se ejecuta después de un tiempo determinado o después de que se cumpla una condición.

const suma = (a,b) => {
    return a + b;
}

var resultado = suma(5, 10);

console.log(resultado);
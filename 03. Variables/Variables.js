/* VARIABLES */

/* Hay 3 formas de declarar variables en JS:
var, let y const
*/

/* ----------------- Variables con var: ----------------- */
var nombre = "Juan";
var edad = 23;
console.log(nombre);
console.log(edad);

var persona = {
    nombre: "Juan",
    Apellido: "Perez",
    edad: 23,
    direccion: {
        calle: "Av. San Martin",
        numero: 932
    },
    hobbies: ["Futbol", "Netflix", "Programar"]
};

console.log(persona);


var ciudad;
console.log(ciudad); // undefined
ciudad = "Buenos Aires";
console.log(ciudad); // Buenos Aires

/* ----------------- Variables con let: ----------------- */
let nombre2 = "Pablo";
console.log(nombre2);

// Existen los bloques de código en JS, como en C#.
// Un bloque de código es todo lo que está entre llaves {}.
{
    let hellow = "Hello World";
    console.log(hellow);
}

// console.log(hellow); // Error: hellow is not defined

{
    var hellow2 = "Hello World 2";
    console.log(hellow2);
}
console.log(hellow2);

/* ----------------- Variables con const: ----------------- */
const PI = 3.1415; // No se puede reasignar, es buena práctica usar mayúsculas para las constantes. 
console.log(PI);

console.log('-------------------------------------------------------');

var nombreEjecutivo = "Juan Pablo Perez";
var edadEjecutivo = 23;
var saludoEjecutivo = `Bienvenido ${nombreEjecutivo}, su edad es ${edadEjecutivo}`; // Ojo con las comillas invertidas
console.log(saludoEjecutivo);
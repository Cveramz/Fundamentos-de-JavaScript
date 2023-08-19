/* Operadores   */

// Operador de asignación
var z = 5;


// Operación de adición
{
var x = 5;
var y = 6;
x+=y; // x = x + y
console.log(x); // 11
}

// Operación de sustracción
{
var x = 5;
var y = 6;
x-=y; // x = x - y
console.log(x); // -1
}

// Operación de multiplicación
{
var x = 5;
var y = 6;
x*=y; // x = x * y
console.log(x); // 30
}

// Operación de división
{
var x = 5;
var y = 6;
x/=y; // x = x / y
console.log(x); // 0.8333333333333334
}

// Operación de módulo
{
var x = 5;
var y = 6;
x%=y; // x = x % y
console.log(x); // 5
}

// Operación de exponenciación
{
var x = 5;
var y = 6;
x**=y; // x = x ** y
console.log(x); // 15625
}

// -------- Operadores de comparación --------
// Operador de igualdad (==)
console.log(5 == 5); // true
console.log(5 == "5"); // true

// Operador de desigualdad (!=)
console.log(5 != 5); // false
console.log(5 != "5"); // false

// Operador de igualdad estricta (===)
console.log(5 === 5); // true
console.log(5 === "5"); // false

// Operador de desigualdad estricta (!==)
console.log(5 !== 5); // false
console.log(5 !== "5"); // true

// Operadores <, >, <=, >=
console.log(5 < 5); // false
console.log(5 > 5); // false
console.log(5 <= 5); // true
console.log(5 >= 5); // true

// -------- Operadores Aritmeticos --------
// Operador de adición (+)
console.log(5 + 5); // 10
// Operador de sustracción (-)
console.log(5 - 5); // 0
// Operador de multiplicación (*)
console.log(5 * 5); // 25
// Operador de división (/)
console.log(5 / 5); // 1
// Operador de módulo (%)
console.log(5 % 5); // 0
// Operador de exponenciación (**)
console.log(5 ** 5); // 3125

// -----
{
var x = 5;
console.log(x++); // 5
console.log(x); // 6
}
{
var x = 5;
console.log(++x); // 6
console.log(x); // 6
}
{
var x = 5;
console.log(x--); // 5
console.log(x); // 4
}
{
var x = 5;
console.log(--x); // 4
console.log(x); // 4
}

// -------- Operadores Lógicos --------

// Operador AND (&&)
console.log(true && true); // true

// Operador OR (||)
console.log(true || false); // true

// Operador NOT (!)
console.log(!true); // false

// -------- Operador de concatenación --------
console.log("Hola " + "mundo"); // Hola mundo
{
var x = "Hola";
var y = "mundo";
console.log(x + " " + y); // Hola mundo
}

// -------- Operador condicional --------
console.log(true ? "Hola" : "Adios"); // Hola
console.log(2 > 1 ? "Hola" : "Adios"); // Hola
console.log(2 < 1 ? "Hola" : "Adios"); // Adios

// -------- Operador de destructuración --------
var persona = {nombre: "Juan", apellido: "Perez", edad: 20};
var {nombre} = persona;
console.log(nombre); // Juan
console.log(persona);

var {nombre: variable, apellido} = persona;
console.log(variable); // Juan

// -------- Operador de miembro o acceso a una propiedad --------

// Operador de miembro (.)

var persona = {nombre: "Juan", apellido: "Perez", edad: 20};
console.log(persona.nombre); // Juan

// Notación de corchetes ([])
var persona = {nombre: "Juan", apellido: "Perez", edad: 20};
console.log(persona["nombre"]); // Juan

// Notación de corchetes en arreglos
var colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // rojo

// -------- Operador de determinación de tipo --------
console.log(typeof 5); // number
console.log(typeof "Hola"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

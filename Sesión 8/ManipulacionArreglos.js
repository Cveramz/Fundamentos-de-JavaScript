/* Manipulación de arreglos en Javascript */

// ForEach
var colores = ["Rojo", "Verde", "Azul"];

colores.forEach(function(color){
    console.log(color);
}
);

/* Salida:
Rojo
Verde
Azul
*/

// push: Agrega un elemento al final del arreglo

var colores = ["Rojo", "Verde", "Azul"];

colores.push("Amarillo");
console.log(colores);

/* Salida:
[ 'Rojo', 'Verde', 'Azul', 'Amarillo' ]
*/

// shift: Elimina el primer elemento del arreglo
colores.shift();
console.log(colores);

/* Salida:
[ 'Verde', 'Azul', 'Amarillo' ]
*/

// pop: Elimina el último elemento del arreglo
colores.pop();
console.log(colores);

/* Salida:
[ 'Verde', 'Azul' ]
*/

// map
var numeros = [1, 2, 3, 4, 5];

var numerosDobles = numeros.map(function(numero){
    return numero * 2;
}
);

console.log(numerosDobles);

/* Salida:
[ 2, 4, 6, 8, 10 ]
*/

var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

console.log(productos);

var productosConIva = productos.map(function(producto){
    // 19% de IVA
    producto.costo = producto.costo * 1.19;
    return producto;
}
);

console.log(productosConIva);


// filter



var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

var productosBaratos = productos.filter(function(producto){
    return producto.costo <= 1000;
}
);

console.log('filter');
console.log(productosBaratos);


// reduce

var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

var total = productos.reduce(function(acumulador, producto){
    return acumulador + producto.costo;
}
, 0);

console.log('reduce');
console.log(total);


// some: Devuelve true si al menos un elemento cumple la condición

var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

var hayProductosBaratos = productos.some(function(producto){
    return producto.costo <= 1000;
}

);

console.log('some');
console.log(hayProductosBaratos);


// every: Devuelve true si todos los elementos cumplen la condición

var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

var todosLosProductosBaratos = productos.every(function(producto){
    return producto.costo <= 1000;
}

);

console.log('every');
console.log(todosLosProductosBaratos);



// find: Devuelve el primer elemento que cumpla la condición

var productos = [
    {nombre: "Doritos", costo: 1000},
    {nombre: "Rolls", costo: 1500},
    {nombre: "Chicle", costo: 350},
    {nombre: "CocaCola - 3Litros", costo: 2400}
];

var productoEncontrado = productos.find(function(producto){
    return producto.nombre === "Chicle";
}

);

console.log('find');
console.log(productoEncontrado);


// findIndex: Devuelve el índice del primer elemento que cumpla la condición

var productos = [
    {nombre: "Doritos", costo: 1000}, // 0
    {nombre: "Rolls", costo: 1500}, // 1
    {nombre: "Chicle", costo: 350}, // 2
    {nombre: "CocaCola - 3Litros", costo: 2400} // 3
];

var indiceProductoEncontrado = productos.findIndex(function(producto){
    return producto.nombre === "Chicle";
}
);

console.log('findIndex');
console.log(indiceProductoEncontrado);


// includes: Devuelve true si el elemento existe en el arreglo

var familia = ["Juan", "Maria", "Pedro"];

var existePedro = familia.includes("Pedro");

console.log('includes');
console.log(existePedro);

var nombrePrueba = (familia[0] === "Juan");
console.log(nombrePrueba);

var contieneA = familia[0].includes("a");
console.log(contieneA);


// Join: Convierte un arreglo en un string
console.log('------------------');

var familia = ["Juan", "Maria", "Pedro"];

var familiaString = familia.join(" - ");

console.log('join');
console.log(familiaString);


// Concat: Concatena dos arreglos

var familia = ["Juan", "Maria", "Pedro"];
var amigos = ["Carlos", "Andres", "Felipe"];

var familiaYAmigos = familia.concat(amigos);

console.log('concat');
console.log(familiaYAmigos);


// Sort: Ordena los elementos de un arreglo

var nacimiento = [1990, 1980, 2000, 1970];

nacimiento.sort(); // Ordena de menor a mayor
console.log('sort');
console.log(nacimiento);

familiaYAmigos.sort(); // Ordena alfabeticamente
console.log(familiaYAmigos);

// Splice: Elimina elementos de un arreglo

var familia = ["Juan", "Maria", "Pedro", "Carlos", "Andres", "Felipe"];

familia.splice(2, 3); // Elimina desde la posición 2, 3 elementos
console.log('splice');
console.log(familia);

// Slice: Extrae elementos de un arreglo

var familia = ["Juan", "Maria", "Pedro", "Carlos", "Andres", "Felipe"];

var familia2 = familia.slice(2, 4); // Extrae desde la posición 2 hasta la 4
console.log('slice');
console.log(familia2);
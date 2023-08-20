/* Ciclos en Javascript */

//While

var contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}

// Do-While

var contador = 0;
do{
    console.log(contador);
    contador++;
}
while(contador < 10);

// For

for(var contador = 0; contador < 10; contador++){
    console.log(contador);
}


// For-In

var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log('-------------------');
// For-Of

var colores = ["Rojo", "Verde", "Azul"];

for(color of colores){
    console.log(color);
}

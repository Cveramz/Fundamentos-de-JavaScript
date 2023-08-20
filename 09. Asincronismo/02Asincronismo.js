/* Asincronismo en JavaScript*/

// Callbacks: es una función que se pasa como parámetro a otra función,
//y se ejecuta después de un tiempo determinado o después de que se cumpla una condición.

const suma = (a,b, cb) => {
    cb(a + b);
}

const imprimir = (data) => {
    console.log(data);
}

suma(5, 10, imprimir);

console.log('---------------------------');


const getDatos = ((cb) => {
    setTimeout(() => {
        cb({
            nombre: 'Juan',
            apellido: 'Perez'
        })
    }, 3000);
});


const imprimirDatos = (data) => {
    console.log(data);
}

getDatos(imprimirDatos);
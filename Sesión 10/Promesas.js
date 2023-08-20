/* Promesas en Javascript */

const getDatos = (error) => {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve({
                nombre: 'Juan',
                apellido: 'Perez'
            });
        } else {
            reject('Error en la conexión');
        }
    });
};

getDatos(true)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

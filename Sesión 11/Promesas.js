/* Promesas en Javascript */

// Async/Await

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
}

const main = async () => {
    try {
        const datos = await getDatos(false);
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

main();

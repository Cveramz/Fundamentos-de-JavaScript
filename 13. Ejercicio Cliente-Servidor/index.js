const axios = require('axios'); // Importamos axios

const fs = require('fs').promises; // Importamos fs, para poder escribir en un archivo  
const path = require('path'); // Importamos path, para poder obtener la ruta del archivo

//Axios es un paquete asincrono, por lo que debemos usar async/await
const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character'); // Hacemos una peticion GET a la API
    let { data: {results} } = response; // Obtenemos la data de la respuesta
    let characters = results.map((character) => {
        return{
            id: character.id,
            name: character.name,
            species: character.species,
        };
    }).map((character) => Object.values(character).join(',')).join('\n'); // Mapeamos los personajes y los convertimos en un string

    const cabeceras = 'id,name,species\n'; // Creamos las cabeceras del csv

    console.log('------------------------------------');
    console.log('Characters: ', characters); // Imprimimos los personajes
    console.log('------------------------------------');
    characters = cabeceras + characters; // Concatenamos las cabeceras con los personajes
    
    await fs.writeFile(path.join(__dirname, 'characters.csv'), characters); // Escribimos el string en un archivo
    console.log('Csv creado en: ', path.join(__dirname, 'characters.csv')); // Imprimimos la ruta del archivo
};

main(); // Ejecutamos la funcion main
const axios = require('axios'); // Importamos axios

//Axios es un paquete asincrono, por lo que debemos usar async/await
const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character'); // Hacemos una peticion GET a la API
    let { data: {results} } = response; // Obtenemos la data de la respuesta
    let characters = results.map((character) => {
        return{
            id: character.id,
            name: character.name,
        }
    }
    )


    console.log('Response: ', results); // Imprimimos la respuesta
    console.log('------------------------------------');
    console.log('Characters: ', characters); // Imprimimos los personajes

}

main(); // Ejecutamos la funcion main
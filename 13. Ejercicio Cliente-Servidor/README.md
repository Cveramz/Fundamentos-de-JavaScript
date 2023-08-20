# EJERCICIO CLIENTE-SERVIDOR

## 1. Creación de proyecto:

Primero se debe crear la carpeta y abrir el terminal dentro de la correspondiente carpeta.
Luego en la terminal se debe ejecutar el siguiente comando:

```npm init```

Y se debe completar la información que se solicita.
Primero se solicita el nombre del proyecto, luego la versión, una descripción, el punto de entrada, el test command, el git repository, keywords, el autor, la licencia y por último la confirmación de que la información es correcta.
Al terminar esto se creará el archivo package.json.

## 2. Instalación de dependencias:

Para instalar las dependencias se debe ejecutar el siguiente comando:

```npm install axios```

¿Qué es axios?

Axios es una librería de JavaScript que se utiliza para realizar peticiones HTTP, es decir, peticiones a una API REST. Es una librería muy utilizada y que funciona tanto en el navegador como en Node.js.

Al revisar el archivo package.json se puede ver que se agregó la dependencia axios y que se creó la carpeta node_modules.
También se creó el archivo package-lock.json, el cual contiene información sobre las dependencias instaladas, esto es para que si se comparte el proyecto con otra persona, esta pueda instalar las mismas dependencias.

## 3. Manos a la obra:

Primero se debe crear el archivo index.js, el cual contendrá el código de nuestro proyecto.

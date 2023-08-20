# Introducción a Node.js

## Conceptos básicos:

### Modelo cliente-servidor

El modelo cliente-servidor es un modelo de comunicación entre dos procesos. Un proceso cliente envía una petición (request) a un proceso servidor, y el proceso servidor envía una respuesta (response) al proceso cliente.
Toda esta comunicación se logra utilizando el protocolo HTTP (Hypertext Transfer Protocol).

Cuando se hace esta petición tiene un componente clave, que es el método de  la solicitud, que puede ser GET, POST, PUT, DELETE, etc. Estos métodos le dicen al servidor qué es lo que se quiere hacer con la información que se está enviando.
También existen códigos de estado de respuesta que pueden ser 1xx, 2xx, 3xx, 4xx, 5xx, etc. Estos códigos de estado le dicen al cliente si la petición fue exitosa o no.
Los de tipo 100 son informativos, los de tipo 200 son de éxito, los de tipo 300 son de redirección, los de tipo 400 son de error del cliente, y los de tipo 500 son de error del servidor.

### CRUD (Create, Read, Update, Delete)

El CRUD es un acrónimo que se utiliza para referirse a las cuatro operaciones básicas que se pueden realizar sobre una base de datos o sobre cualquier otro sistema que almacene información.

- Create: Crear un nuevo registro.
- Read: Leer un registro existente.
- Update: Actualizar un registro existente.
- Delete: Eliminar un registro existente.

Todos estos datos que se estarán manipulando se almacenan en una base de datos como puede ser MongoDB, MySQL, PostgreSQL, etc.
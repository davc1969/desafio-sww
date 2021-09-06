// importar la librería http para iniciar un server
const http = require("http");

// indicar el puerto en el que se creará el servidor
const PORT = 8080;  // debería pedírsele al sistema si hay un puerto disponible: process.env.PORT || 8080

// importar la librería url para manejar los parámetros en la url
const url = require("url");

//importar la librería fs para manejo de archivos en el servidor
const fs = require("fs");

// Se crea el servidor
http.createServer( (req, res) => {  //función anónima que tiene un request y un response

})
.listen(PORT, () => console.log('Escuchando el puerto ' + PORT))
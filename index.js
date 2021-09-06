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
    const params = url.parse(req.url, true).query;
    console.log(params);
    const archivo = params.archivo;
    const contenido = params.contenido;
    const nombre = params.nombre;
    const nuevoNombre = params.nuevoNombre;

    if (req.url.includes("/crear")) {
        fs.writeFile(archivo, contenido, "utf8", () => {
            console.log(`Archivo ${archivo} creado sin problemas`);
        })
    }

    if (req.url.includes("/leer")) {
        fs.readFile(archivo, "utf8", (err, data) => {
            if (err){
                console.log(`Archivo ${archivo} no leído`);
                throw err;
            };
            console.log(`Archivo ${archivo} leído sin problemas:`);
            console.log(data);
        })
    }

    if (req.url.includes("/renombrar")) {
        fs.rename(nombre, nuevoNombre, (err) => {
            if (err){
                console.log("Nada, no se pudo renombrar");
                throw err;
            }
            console.log("Ya se renombró");
        })
    }

    if (req.url.includes("/eliminar")) {
        fs.unlink(archivo, (err) => {
            if (err){
                console.log("No se borró, no entiendo porqué");
                throw err;
            };
            console.log("Qué crees, ya se borró");
        })
    }
})
.listen(PORT, () => console.log('Escuchando el puerto ' + PORT));




function limpiarCamposEnHtml () {
    document.getElementById("archivo").innerHTML = "";
    document.getElementById("contenido").innerHTML = "";
    console.log("Supuestamente limpió todo");
}
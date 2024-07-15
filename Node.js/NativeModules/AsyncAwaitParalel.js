const { readFile } = require("node:fs").promises;

Promise.all([
    readFile("./Archivo.txt", "utf-8"),
    readFile("./Archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
    console.log("Primer Texto: ", text);
    console.log("Segundo Texto: ", secondText);
});

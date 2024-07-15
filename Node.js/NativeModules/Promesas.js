const fs = require("node:fs").promises;

console.log("Leyendo el primer Archivo");
fs.readFile("./Archivo.txt", "utf-8").then((text) => {
    console.log(text);
});

console.log("Proceso realizando asincronamente");

console.log("Leyendo el segundo Archivo");
fs.readFile("./Archivo2.txt", "utf-8").then((text) => {
    console.log(text);
});

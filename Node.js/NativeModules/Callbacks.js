const fs = require("fs");

console.log("Leyendo el primer Archivo");
fs.readFile("./Archivo.txt", "utf-8", (error, text) => {
    if (error) {
        console.error("Error al leer el archivo:", error);
        return;
    }
    console.log(text);
});

console.log("Proceso realizando asincronamente");

console.log("Leyendo el segundo Archivo");
fs.readFile("./Archivo2.txt", "utf-8", (error, text) => {
    if (error) {
        console.error("Error al leer el archivo:", error);
        return;
    }
    console.log(text);
});

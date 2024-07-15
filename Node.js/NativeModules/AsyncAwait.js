const { readFile } = require("node:fs").promises;

(async () => {
    console.log("Leyendo el primer Archivo");
    const text = await readFile("./Archivo.txt", "utf-8");
    console.log("Primer Texto: ", text);

    console.log("Proceso realizando asincronamente");

    console.log("Leyendo el segundo Archivo");
    const text2 = await readFile("./Archivo2.txt", "utf-8");
    console.log("Segundo Texto: ", text2);
})();

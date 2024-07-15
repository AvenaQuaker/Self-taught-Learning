import { platform, type, release, homedir } from "node:os";

console.log("Informacion del Sistema Operativo:");
console.log("_________________________________");

console.log("Plataforma:", platform());
console.log("Sistema Operativo:", type());
console.log("Version del SO:", release());
console.log("Directorio de ejecucion:", process.execPath);
console.log("Directorio actual:", process.cwd());
console.log("Directorio home:", homedir());

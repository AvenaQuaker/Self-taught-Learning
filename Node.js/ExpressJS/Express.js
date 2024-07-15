const express = require("express");
const app = express();
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

const info = require("./Info.json");

app.use(express.json());

// app.use((req, res, next) => {
//     console.log("Mi primer Middleware");
//     if (req.method != "POST") return next();
//     if (req.headers["Content-Type"] != "application/json") return next();

//     // Solo llegan las peticiones POST y aplication/Json
//     let body = "";

//     //Escuchar el evento data
//     req.on("data", (chunk) => {
//         body += chunk;
//     });

//     req.on("end", () => {
//         const data = JSON.parse(body);
//         data.timestamp = Date.now();

//         //Mutar la request y meter la informacion en el req.body
//         req.body = data;
//         next();
//     });
// });

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la Pagina de Inicio</h1>");
});

app.get("/info", (req, res) => {
    res.json(info);
});

app.post("/POST", (req, res) => {
    res.status(201).json(req.body);
});

app.use((req, res) => {
    res.status(404).send("<h1>Pagina no encontrada</h1>");
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

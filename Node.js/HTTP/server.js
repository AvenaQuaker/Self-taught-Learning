const http = require("node:http");
const fs = require("node:fs");

const processRequest = (req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h1>Bienvenido a la Pagina de Inicio</h1>");
    } else if (req.url === "/imagen") {
        res.setHeader("Content-Type", "image/png");

        fs.readFile("./Node.js/HTTP/chad.png", (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("<h1>Error Interno del Servidor</h1>");
            } else {
                res.setHeader("Content-Type", "image/png");
                res.end(data);
            }
        });
    } else if (req.url === "/contacto") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h1>Bienvenido a los Contactos</h1>");
    } else {
        res.statusCode = 404; // Not Found
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h1>404 - Página no encontrada</h1>");
    }
};

const server = http.createServer(processRequest);

server.listen(0, () => {
    console.log(
        `Server is running on port http://localhost:${server.address().port}`
    );
});

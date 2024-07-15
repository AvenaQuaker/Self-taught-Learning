const http = require("http");
const fs = require("fs");

//CommonJS
const info = require("./Info.json");

const processRequest = (req, res) => {
    const { method, url } = req;

    switch (method) {
        case "GET":
            switch (url) {
                case "/":
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    return res.end("<h1> mi pagina inicial</h1>");
                case "/info":
                    res.setHeader(
                        "Content-Type",
                        "application/json; charset=utf-8"
                    );
                    return res.end(JSON.stringify(info));
                default:
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    return res.end("<h1>404 Not Found</h1>");
            }
        case "POST":
            switch (url) {
                case "IF": {
                    const body = {
                        name: "ditto",
                        type: "normal",
                        moves: ["transform"],
                    };

                    req.on("data", (chunk) => {
                        body += chunk.toString();
                    });

                    req.on("end", () => {
                        const data = JSON.parse(body);
                        res.writeHead(201, {
                            "content-type": "application/json; charset=utf-8",
                        });
                        res.end(JSON.stringify(data));
                    });
                    break;
                }
            }
    }
};

const server = http.createServer(processRequest);

server.listen(0, () => {
    console.log(
        `Server is running on port http://localhost:${server.address().port}`
    );
});

import cors from "cors";

export const miCors = () =>
    cors({
        origin: (origin, callback) => {
            // Origenes Aceptados
            const ACCEPTED_ORIGINS = [
                "http://localhost:8080",
                "http://localhost:1234",
                "http://localhost:3000",
                "http://127.0.0.1:5500",
                "https://api-rest-auco.onrender.com",
            ];

            if (ACCEPTED_ORIGINS.includes(origin)) {
                return callback(null, true);
            }

            if (!origin) {
                return callback(null, true);
            }

            return callback(new Error("No permitido"), false);
        },
    });

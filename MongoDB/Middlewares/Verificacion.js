import { validarDatos } from "../Schemas/Datos.js";

export const Verificacion = (req, res, next) => {
    let ObjetoTipado = {
        nombre: req.body.nombre == "" ? null : req.body.nombre,
        apellido: req.body.apellido == "" ? null : req.body.apellido,
        edad: parseInt(req.body.edad) == "" ? null : parseInt(req.body.edad),
        comida: req.body.comida == "" ? null : req.body.comida,
    };

    const result = validarDatos(ObjetoTipado);

    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error) });
    }
    next();
};

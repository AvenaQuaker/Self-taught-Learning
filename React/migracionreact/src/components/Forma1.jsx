import React, {
    useEffect,
    useImperativeHandle,
    forwardRef,
    useRef,
} from "react";

const Forma1 = forwardRef(({ Mostrar, Accion, CambiarForma, datos }, ref) => {
    const formBoxref = useRef(null);
    const idRef = useRef(null);
    const nombreRef = useRef(null);
    const edadRef = useRef(null);
    const ciudadRef = useRef(null);
    let objeto = {};

    useImperativeHandle(ref, () => ({
        setPosition(position) {
            if (formBoxref.current) {
                formBoxref.current.style.top = `${position.bottom * 1}px`;
                formBoxref.current.style.left = `${position.right * 0.8}px`;
            }
        },
        Insert() {
            idRef.current.style.pointerEvents = "none";
            idRef.current.style.pointerEvents = "auto";
            edadRef.current.style.pointerEvents = "auto";
            ciudadRef.current.style.pointerEvents = "auto";
        },
        Update() {
            idRef.current.style.pointerEvents = "none";
            idRef.current.style.pointerEvents = "auto";
            edadRef.current.style.pointerEvents = "auto";
            ciudadRef.current.style.pointerEvents = "auto";
        },
        Delete() {
            idRef.current.style.pointerEvents = "none";
            idRef.current.style.pointerEvents = "none";
            edadRef.current.style.pointerEvents = "none";
            ciudadRef.current.style.pointerEvents = "none";
        },
    }));

    useEffect(() => {
        if (formBoxref.current) {
            formBoxref.current.style.opacity = Mostrar ? "1" : "0";
            formBoxref.current.style.pointerEvents = Mostrar ? "auto" : "none";
        }
    }, [Mostrar]);

    useEffect(() => {
        objeto = datos.objeto;
        ponerDatos();
    }, [datos]);

    function disableAll() {
        idRef.current.style.pointerEvents = "none";
        idRef.current.style.pointerEvents = "none";
        edadRef.current.style.pointerEvents = "none";
        ciudadRef.current.style.pointerEvents = "none";
        {
            CambiarForma("", Accion);
        }
    }

    function ponerDatos() {
        if (objeto) {
            idRef.current.value = objeto[0] || "";
            nombreRef.current.value = objeto[1] || "";
            edadRef.current.value = objeto[2] || "";
            ciudadRef.current.value = objeto[3] || "";
        }
    }

    return (
        <div
            className="formBox"
            ref={formBoxref}
            style={{ transition: "opacity 0.5s" }}>
            <form id="tabla1form" encType="application/x-www-form-urlencoded">
                <div className="user-box">
                    <input
                        type="tel"
                        name="ID_Cliente"
                        required
                        id="tabla1id"
                        autoComplete="off"
                        ref={idRef}
                    />
                    <label>ID</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Nombre"
                        required
                        id="tabla1nombre"
                        autoComplete="off"
                        ref={nombreRef}
                    />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <input
                        type="tel"
                        name="Telefono"
                        required
                        id="tabla1edad"
                        autoComplete="off"
                        ref={edadRef}
                    />
                    <label>Telefono</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Correo_Electronico"
                        required
                        id="tabla1ciudad"
                        autoComplete="off"
                        ref={ciudadRef}
                    />
                    <label>CorreoElectronico</label>
                </div>
                <div className="formbuttons" id="formbuttonstabla1">
                    <button
                        type="button"
                        className="cancelbutton"
                        onClick={disableAll}>
                        <span>CANCEL</span>
                    </button>
                    <button
                        type="button"
                        id="acceptbuttonCliente"
                        className="acceptbutton"
                        onClick={disableAll}>
                        <span>ACCEPT</span>
                    </button>
                </div>
            </form>
        </div>
    );
});

export default Forma1;

import React, {
    useEffect,
    useImperativeHandle,
    forwardRef,
    useRef,
} from "react";

const Forma2 = forwardRef(({ Mostrar, Accion, CambiarForma, datos }, ref) => {
    const formBoxref = useRef(null);
    let idref = useRef(null);
    let clienteref = useRef(null);
    let fecharef = useRef(null);
    let pagoref = useRef(null);
    let antref = useRef(null);
    let finalref = useRef(null);
    let objeto = {};

    useImperativeHandle(ref, () => ({
        setPosition(position) {
            if (formBoxref.current) {
                formBoxref.current.style.top = `${position.bottom * 1}px`;
                formBoxref.current.style.left = `${position.right * 0.8}px`;
            }
        },
        Insert() {
            idref.current.style.pointerEvents = "none";
            clienteref.current.style.pointerEvents = "auto";
            fecharef.current.style.pointerEvents = "auto";
            pagoref.current.style.pointerEvents = "auto";
            antref.current.style.pointerEvents = "auto";
            finalref.current.style.pointerEvents = "auto";
        },
        Update() {
            idref.current.style.pointerEvents = "auto";
            clienteref.current.style.pointerEvents = "auto";
            fecharef.current.style.pointerEvents = "auto";
            pagoref.current.style.pointerEvents = "auto";
            antref.current.style.pointerEvents = "auto";
            finalref.current.style.pointerEvents = "auto";
        },
        Delete() {
            idref.current.style.pointerEvents = "none";
            clienteref.current.style.pointerEvents = "none";
            fecharef.current.style.pointerEvents = "none";
            pagoref.current.style.pointerEvents = "none";
            antref.current.style.pointerEvents = "none";
            finalref.current.style.pointerEvents = "none";
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

    function ponerDatos() {
        if (objeto) {
            idref.current.value = objeto[0];
            clienteref.current.value = objeto[1];
            fecharef.current.value = objeto[2];
            pagoref.current.value = objeto[3];
            antref.current.value = objeto[4];
            finalref.current.value = objeto[5];
        }
    }

    function disableAll() {
        idref.current.style.pointerEvents = "none";
        clienteref.current.style.pointerEvents = "none";
        fecharef.current.style.pointerEvents = "none";
        pagoref.current.style.pointerEvents = "none";
        antref.current.style.pointerEvents = "none";
        finalref.current.style.pointerEvents = "none";
        {
            CambiarForma("", Accion);
        }
    }

    return (
        <div
            className="formBox"
            ref={formBoxref}
            style={{ transition: "opacity 0.5s" }}>
            <form id="tabla2form" encType="application/x-www-form-urlencoded">
                <div className="user-box">
                    <input
                        type="tel"
                        name="ID_Contrato"
                        required
                        id="tabla2id"
                        autoComplete="off"
                        ref={idref}
                    />
                    <label>ID</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="ID_Cliente"
                        required
                        id="tabla2cliente"
                        autoComplete="off"
                        ref={clienteref}
                    />
                    <label>Cliente</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Fecha"
                        required
                        id="tabla2fecha"
                        autoComplete="off"
                        ref={fecharef}
                    />
                    <label>Fecha</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Metodo_De_Pago"
                        required
                        id="tabla2metodopago"
                        autoComplete="off"
                        ref={pagoref}
                    />
                    <label>MetodoDePago</label>
                </div>
                <div className="user-box">
                    <input
                        type="tel"
                        name="Anticipo"
                        required
                        id="tabla2anticipo"
                        autoComplete="off"
                        ref={antref}
                    />
                    <label>Anticipo</label>
                </div>
                <div className="user-box">
                    <input
                        type="tel"
                        name="Monto_Final"
                        required
                        id="tabla2montofinal"
                        autoComplete="off"
                        ref={finalref}
                    />
                    <label>MontoFinal</label>
                </div>
                <div className="formbuttons" id="formbuttonstabla2">
                    <button
                        type="button"
                        className="cancelbutton"
                        onClick={disableAll}>
                        <span>CANCEL</span>
                    </button>
                    <button
                        type="button"
                        id="acceptbuttonContrato"
                        className="acceptbutton"
                        onClick={disableAll}>
                        <span>ACCEPT</span>
                    </button>
                </div>
            </form>
        </div>
    );
});

export default Forma2;

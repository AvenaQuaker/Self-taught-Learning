import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import CRUD from "./CRUD";
import Graficas from "./Graficas";
import Forma1 from "./Forma1";
import Forma2 from "./Forma2";
import Loading from "./Loading";

function Dashboard() {
    let [currentPage, setCurrentPage] = useState(1);
    const [mostrarForma1, setMostrarForma1] = useState(false);
    const [mostrarForma2, setMostrarForma2] = useState(false);
    const [accion, setAccion] = useState("");
    const [objeto, setObjeto] = useState({});

    const tabla1Ref = useRef(null);
    const tabla2Ref = useRef(null);

    const VerificarPagina = (page) => {
        setCurrentPage(page);
    };

    function darObjeto(objeto) {
        setObjeto({ objeto });
    }

    function CambiarForma(tabla, nuevaAccion) {
        setAccion(nuevaAccion);
        if (tabla === "Opcion1") {
            setMostrarForma1(true);
            setMostrarForma2(false);
        } else if (tabla === "Opcion2") {
            setMostrarForma1(false);
            setMostrarForma2(true);
        } else {
            setMostrarForma1(false);
            setMostrarForma2(false);
        }
    }
    return (
        <div>
            <div className="Dashboard">
                <Sidebar
                    VerificarPagina={VerificarPagina}
                    currentPage={currentPage}
                />
                <div className="datalayout">
                    <div className="top">
                        <label id="currentpage" style={{ fontStyle: "italic" }}>
                            {currentPage === 1 ? "CRUD" : "Graficas"}
                        </label>
                    </div>
                    <CRUD
                        isVisible={currentPage === 1}
                        CambiarForma={CambiarForma}
                        tabla1Ref={tabla1Ref}
                        tabla2Ref={tabla2Ref}
                        darObjeto={darObjeto}
                    />
                    <Graficas isVisible={currentPage === 2} />
                </div>
            </div>
            <Forma1
                ref={tabla1Ref}
                Mostrar={mostrarForma1}
                Accion={accion}
                CambiarForma={CambiarForma}
                datos={objeto}
            />
            <Forma2
                ref={tabla2Ref}
                Mostrar={mostrarForma2}
                Accion={accion}
                CambiarForma={CambiarForma}
                datos={objeto}
            />
            <Loading />
        </div>
    );
}

export default Dashboard;

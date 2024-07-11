import React, { useState, useEffect, useRef } from "react";
import $, { event } from "jquery";
import "datatables.net-select-dt";

function CRUD({ isVisible, CambiarForma, tabla1Ref, tabla2Ref, darObjeto }) {
    let Filtro = useRef("Opcion1");
    let BanderaDOMCL = useRef(true);

    let array1 = [
        {
            ID: 1,
            Nombre: "Juan Pérez",
            Telefono: "1234567890",
            CorreoElectronico: "juan@example.com",
        },
        {
            ID: 2,
            Nombre: "María García",
            Telefono: "0987654321",
            CorreoElectronico: "maria@example.com",
        },
        {
            ID: 3,
            Nombre: "Carlos López",
            Telefono: "5551234567",
            CorreoElectronico: "carlos@example.com",
        },
        {
            ID: 4,
            Nombre: "Ana Martínez",
            Telefono: "9998887776",
            CorreoElectronico: "ana@example.com",
        },
        {
            ID: 5,
            Nombre: "Pedro Rodríguez",
            Telefono: "1112223334",
            CorreoElectronico: "pedro@example.com",
        },
        {
            ID: 6,
            Nombre: "Luisa Hernández",
            Telefono: "7778889990",
            CorreoElectronico: "luisa@example.com",
        },
        {
            ID: 7,
            Nombre: "Miguel Gómez",
            Telefono: "4445556661",
            CorreoElectronico: "miguel@example.com",
        },
        {
            ID: 8,
            Nombre: "Sofía Díaz",
            Telefono: "1239876543",
            CorreoElectronico: "sofia@example.com",
        },
        {
            ID: 9,
            Nombre: "Jorge Ruiz",
            Telefono: "7776665554",
            CorreoElectronico: "jorge@example.com",
        },
        {
            ID: 10,
            Nombre: "Lucía Torres",
            Telefono: "3332221110",
            CorreoElectronico: "lucia@example.com",
        },
        {
            ID: 11,
            Nombre: "Daniel Sánchez",
            Telefono: "6667778882",
            CorreoElectronico: "daniel@example.com",
        },
        {
            ID: 12,
            Nombre: "Valeria Ramírez",
            Telefono: "5554443331",
            CorreoElectronico: "valeria@example.com",
        },
        {
            ID: 13,
            Nombre: "Fernando Castro",
            Telefono: "2223334445",
            CorreoElectronico: "fernando@example.com",
        },
        {
            ID: 14,
            Nombre: "Carmen Flores",
            Telefono: "8889990007",
            CorreoElectronico: "carmen@example.com",
        },
        {
            ID: 15,
            Nombre: "Diego Herrera",
            Telefono: "6665554443",
            CorreoElectronico: "diego@example.com",
        },
        {
            ID: 16,
            Nombre: "Paula Núñez",
            Telefono: "4445556668",
            CorreoElectronico: "paula@example.com",
        },
        {
            ID: 17,
            Nombre: "Ricardo Vargas",
            Telefono: "7778889992",
            CorreoElectronico: "ricardo@example.com",
        },
        {
            ID: 18,
            Nombre: "Isabel Medina",
            Telefono: "2221110006",
            CorreoElectronico: "isabel@example.com",
        },
        {
            ID: 19,
            Nombre: "Andrés León",
            Telefono: "1112223335",
            CorreoElectronico: "andres@example.com",
        },
        {
            ID: 20,
            Nombre: "Laura Sánchez",
            Telefono: "7776665554",
            CorreoElectronico: "laura@example.com",
        },
    ];
    let array2 = [
        {
            ID: 1,
            Cliente: "Cliente 1",
            Fecha: "2024-04-22",
            MetodoDePago: "Tarjeta de crédito",
            Anticipo: 100,
            MontoFinal: 500,
        },
        {
            ID: 2,
            Cliente: "Cliente 2",
            Fecha: "2024-04-21",
            MetodoDePago: "Efectivo",
            Anticipo: 50,
            MontoFinal: 300,
        },
        {
            ID: 3,
            Cliente: "Cliente 3",
            Fecha: "2024-04-20",
            MetodoDePago: "Transferencia bancaria",
            Anticipo: 200,
            MontoFinal: 700,
        },
        {
            ID: 4,
            Cliente: "Cliente 4",
            Fecha: "2024-04-19",
            MetodoDePago: "Cheque",
            Anticipo: 0,
            MontoFinal: 1000,
        },
        {
            ID: 5,
            Cliente: "Cliente 5",
            Fecha: "2024-04-18",
            MetodoDePago: "PayPal",
            Anticipo: 150,
            MontoFinal: 800,
        },
        {
            ID: 6,
            Cliente: "Cliente 6",
            Fecha: "2024-04-17",
            MetodoDePago: "Tarjeta de débito",
            Anticipo: 50,
            MontoFinal: 600,
        },
        {
            ID: 7,
            Cliente: "Cliente 7",
            Fecha: "2024-04-16",
            MetodoDePago: "Efectivo",
            Anticipo: 0,
            MontoFinal: 900,
        },
        {
            ID: 8,
            Cliente: "Cliente 8",
            Fecha: "2024-04-15",
            MetodoDePago: "Transferencia bancaria",
            Anticipo: 300,
            MontoFinal: 1200,
        },
        {
            ID: 9,
            Cliente: "Cliente 9",
            Fecha: "2024-04-14",
            MetodoDePago: "Tarjeta de crédito",
            Anticipo: 200,
            MontoFinal: 700,
        },
        {
            ID: 10,
            Cliente: "Cliente 10",
            Fecha: "2024-04-13",
            MetodoDePago: "PayPal",
            Anticipo: 100,
            MontoFinal: 800,
        },
        {
            ID: 11,
            Cliente: "Cliente 11",
            Fecha: "2024-04-12",
            MetodoDePago: "Cheque",
            Anticipo: 0,
            MontoFinal: 1500,
        },
        {
            ID: 12,
            Cliente: "Cliente 12",
            Fecha: "2024-04-11",
            MetodoDePago: "Tarjeta de crédito",
            Anticipo: 150,
            MontoFinal: 900,
        },
        {
            ID: 13,
            Cliente: "Cliente 13",
            Fecha: "2024-04-10",
            MetodoDePago: "Tarjeta de débito",
            Anticipo: 50,
            MontoFinal: 400,
        },
        {
            ID: 14,
            Cliente: "Cliente 14",
            Fecha: "2024-04-09",
            MetodoDePago: "Efectivo",
            Anticipo: 0,
            MontoFinal: 600,
        },
        {
            ID: 15,
            Cliente: "Cliente 15",
            Fecha: "2024-04-08",
            MetodoDePago: "Transferencia bancaria",
            Anticipo: 200,
            MontoFinal: 1100,
        },
        {
            ID: 16,
            Cliente: "Cliente 16",
            Fecha: "2024-04-07",
            MetodoDePago: "PayPal",
            Anticipo: 100,
            MontoFinal: 750,
        },
        {
            ID: 17,
            Cliente: "Cliente 17",
            Fecha: "2024-04-06",
            MetodoDePago: "Tarjeta de crédito",
            Anticipo: 300,
            MontoFinal: 850,
        },
        {
            ID: 18,
            Cliente: "Cliente 18",
            Fecha: "2024-04-05",
            MetodoDePago: "Cheque",
            Anticipo: 0,
            MontoFinal: 1300,
        },
        {
            ID: 19,
            Cliente: "Cliente 19",
            Fecha: "2024-04-04",
            MetodoDePago: "Tarjeta de débito",
            Anticipo: 50,
            MontoFinal: 500,
        },
        {
            ID: 20,
            Cliente: "Cliente 20",
            Fecha: "2024-04-03",
            MetodoDePago: "Efectivo",
            Anticipo: 0,
            MontoFinal: 700,
        },
    ];

    useEffect(() => {
        if (BanderaDOMCL.current) {
            $("#tabla1").DataTable({
                select: true,
                select: {
                    style: "single",
                },
                data: array1,
                columns: [
                    { data: "ID" },
                    { data: "Nombre" },
                    { data: "Telefono" },
                    { data: "CorreoElectronico" },
                ],
            });

            $("#tabla2").DataTable({
                select: true,
                select: {
                    style: "single",
                },
                data: array2,
                columns: [
                    { data: "ID" },
                    { data: "Cliente" },
                    { data: "Fecha" },
                    { data: "MetodoDePago" },
                    { data: "Anticipo" },
                    { data: "MontoFinal" },
                ],
            });

            Filtrar();
            BanderaDOMCL = false;
        }
    }, []);

    function Filtrar() {
        const tablaFiltrar = Filtro.current.value;
        const tabla1Wrapper = document.getElementById("tabla1_wrapper");
        const tabla2Wrapper = document.getElementById("tabla2_wrapper");

        if (tablaFiltrar === "Opcion1") {
            tabla1Wrapper.style.display = "block";
            tabla2Wrapper.style.display = "none";
        } else {
            tabla1Wrapper.style.display = "none";
            tabla2Wrapper.style.display = "block";
        }
    }

    const handleClick = (e, action) => {
        const tablaFiltrar = Filtro.current.value;
        const clickedBox = e.target;
        const newPosition = clickedBox.getBoundingClientRect();
        CambiarForma(tablaFiltrar, action);

        switch (tablaFiltrar) {
            case "Opcion1":
                if (tabla1Ref.current) {
                    tabla1Ref.current.setPosition(newPosition);
                    switch (action) {
                        case "Insert":
                            tabla1Ref.current.Insert();
                            break;
                        case "Update":
                            tabla1Ref.current.Update();
                            break;
                        case "Delete":
                            tabla1Ref.current.Delete();
                            break;
                    }
                }
                break;
            case "Opcion2":
                if (tabla2Ref.current) {
                    tabla2Ref.current.setPosition(newPosition);
                    switch (action) {
                        case "Insert":
                            tabla2Ref.current.Insert();
                            break;
                        case "Update":
                            tabla2Ref.current.Update();
                            break;
                        case "Delete":
                            tabla2Ref.current.Delete();
                            break;
                    }
                }
                break;
        }
    };

    function ObtenerDatos(e) {
        if (e.target.tagName == "TD") {
            let fila = e.target.parentNode;
            let celdas = fila.getElementsByTagName("td");
            let objeto = {};

            for (let i = 0; i < celdas.length; i++) {
                objeto[i] = celdas[i].innerHTML;
            }
            darObjeto(objeto);
        }
    }

    function Imprimir() {
        let wspFrame = document.getElementById("frame").contentWindow;
        wspFrame.focus();
        wspFrame.print();
    }

    return (
        <div
            className="main1"
            id="main1"
            style={{ display: isVisible ? "flex" : "none" }}>
            <div className="CRUD" id="style-1">
                <div className="filter">
                    <label>Que le gustaria Mostrar?</label>
                    <select
                        ref={Filtro}
                        id="tablafiltrada"
                        onChange={() => Filtrar()}>
                        <option value="Opcion1">Clientes</option>
                        <option value="Opcion2">Contratos</option>
                    </select>
                </div>
                <table
                    id="tabla1"
                    className="cell-border"
                    onClick={(e) => ObtenerDatos(e)}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>CorreoElectronico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table
                    id="tabla2"
                    className="cell-border"
                    onClick={(e) => ObtenerDatos(e)}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Metodo de Pago</th>
                            <th>Anticipo</th>
                            <th>MontoFinal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="crudbuttons">
                <button
                    className="crudbutton"
                    id="Insert"
                    onClick={(e) => handleClick(e, "Insert")}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">CREATE</span>
                </button>
                <button
                    className="crudbutton"
                    id="Update"
                    onClick={(e) => handleClick(e, "Update")}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">UPDATE</span>
                </button>
                <button
                    className="crudbutton"
                    id="Delete"
                    onClick={(e) => handleClick(e, "Delete")}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">DELETE</span>
                </button>
                <button
                    type="submit"
                    className="crudbutton"
                    id="btn-print"
                    onClick={Imprimir}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">PDF</span>
                    <iframe
                        id="frame"
                        style={{ width: "100vh", border: 0, height: 0 }}
                        src="/src/Reporte.html"></iframe>
                </button>
            </div>
        </div>
    );
}

export default CRUD;

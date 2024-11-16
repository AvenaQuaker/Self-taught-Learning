const forma = document.getElementById("forma");
const forma2 = document.getElementById("forma2");

function API() {
    fetch("http://127.0.0.1:1234")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
}

forma.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(forma);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    fetch("http://127.0.0.1:1234/PARAM/Body", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

    const id = 714;
    fetch(`http://127.0.0.1:1234/PARAM/Param/${id}`, {
        method: "POST",
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

    const nombre = "Jaime";
    const apellido = "Aquino";

    fetch(
        `http://127.0.0.1:1234/PARAM/Query?nombre=${nombre}&apellido=${apellido}`,
        {
            method: "POST",
        }
    )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
});

forma2.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(forma2);
    console.log(formData);

    fetch("http://127.0.0.1:1234/ARCH/Enviar", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
});

function SolicitarImagen() {
    fetch("http://127.0.0.1:1234/ARCH/Recibir", {
        method: "GET",
    })
        .then((response) => response.blob())
        .then((blob) => {
            const imgUrl = URL.createObjectURL(blob);
            document.getElementById("imagen").src = imgUrl;
        })
        .catch((error) => console.error("Error:", error));
}

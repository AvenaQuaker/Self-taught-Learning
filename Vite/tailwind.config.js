/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Negro: "#120e0e",
                NegroLigero: "#191717",
                RojoFuerte: "#4a1c1d",
                Rojo: "#9e0505",
                Blanco: "#fbfef9",
            },
            fontFamily: {
                Fredoka: ["Fredoka", "sans-serif"],
                Warp: ["Tilt Warp", "sans-serif"],
                Monserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};

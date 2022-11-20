/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito"],
                jakarta: ["'Plus Jakarta Sans'"],
            },
            colors: {
                'purple': "#8B70E9",
            },
        },
    },
    plugins: [],
}
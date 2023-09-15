/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            headings: ["Inter", "sans-serif"],
            body: ["Noto Sans", "sans-serif"]
        },
        extend: {
            colors: {
                "primary": "#e1ae9a",
                "secondary": "#4a5956",
                "terciary": "#65897b",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
};
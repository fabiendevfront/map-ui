/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            headings: ["Inter", "sans-serif"],
            body: ["Noto Sans", "sans-serif"]
        },
        colors: {
            "primary": "#e1ae9a",
            "secondary": "#4a5956",
            "terciary": "#65897b",
            "gray": {
                100: "#f3f4f6",
                700: "#374151",
            },
        },
        extend: {},
    },
    plugins: [],
};
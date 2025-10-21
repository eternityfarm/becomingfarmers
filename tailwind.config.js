/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
fontFamily: {
sans: ["Poppins", "Pretendard", "ui-sans-serif", "system-ui"],
},
colors: {
brand: {
50: "#eefbf4",
100: "#dbf7e8",
200: "#b1eccd",
300: "#84e1b0",
400: "#4fcd8a",
500: "#27b56c",
600: "#1c9357",
700: "#18764a",
800: "#155d3e",
900: "#124c35"
}
}
},
},
plugins: [],
};

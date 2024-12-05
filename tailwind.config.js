/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Aqui você define que o dark mode será ativado com a classe `dark` no elemento pai
  theme: {
    extend: {
      colors: {
        primary: '#4C1D95',
        background: '#ffffff',
        darkBackground: '#1a202c',
        darkText: '#ffffff',
        lightText: '#000000',
      },
    },
  },
  plugins: [],
}

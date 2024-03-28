/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '13':'50px',
        '80': '25rem',
        '130':'40rem'
      }
    },
  },
  plugins: [],
}


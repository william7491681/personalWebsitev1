/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBackground': "url('./src/subtle-prism.svg')"
      }
    },
  },
  plugins: [],
}

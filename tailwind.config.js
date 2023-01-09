/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'william': "url('../src/William.jpg')",
      },
      keyframes: {
        LSU: {
          '0%': {
            "background-size": "200% 200%",
            "background-position": "left"
          },
          '50%': {
            "background-size": "200% 200%",
            "background-position": "right"
          },
          '100%': {
            "background-size": "200% 200%",
            "background-position": "left"
          }
        }
      },
      animation: {
        colorGradient: "LSU 4s infinite"
      }
    }
  },
  plugins: [],
}

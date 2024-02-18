/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hex-pattern' : "url('../app/img/hexpatternbg.png')",
        'circuit-pattern' : "url('../app/img/CircuitPatternbg1.PNG')",
        'close-boxes' : "url('../app/img/bg2-closeBoxes.PNG')",
        'far-boxes' : "url('../app/img/bg1-farBoxes.PNG')"

      },
      colors: {
        'cowboy-purple' : '#2c1f31',
        'cowboy-purple-light' : '#342839',
        'cowboy-purple-dark' : '#241a28',
        'cowboy-orange-dark' : '#cc282d',
        'cowboy-orange' : '#f25d35',
        'cowboy-skin' : '#ff9f90',
        'cowboy-white': '#f0f3ff',
      }
    },
  },
  plugins: [],
}


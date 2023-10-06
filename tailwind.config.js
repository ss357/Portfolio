/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'custom': '1090px', // You can replace 'custom' with your desired breakpoint name
      },
    },
  },
  plugins: [],
}


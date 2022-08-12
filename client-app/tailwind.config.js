/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        '3/4': '75%',
        '1/2':'50%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}

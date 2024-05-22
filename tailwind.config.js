/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marie: ["'Merriweather Sans'", 'sans-serif'],
        dance: ["'Dancing Script'", 'cursive'],
        rancho: ['"Rancho", cursive'],
        roboto : ['"Roboto", sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


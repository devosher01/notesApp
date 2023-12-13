/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'custom': '#F4F4F5',
        'custom2': '#71717A',
      }
    },
  },
  plugins: [],
};

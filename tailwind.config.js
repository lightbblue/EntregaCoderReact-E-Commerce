/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fruit: {
          50: '#F3FAF3',
          100: '#E4F4E4',
          200: '#CBE7CB',
          300: '#A2D3A3',
          400: '#71B772',
          500: '#51A252',
          600: '#3B7E3C',
          700: '#316432',
          800: '#2B502C',
          900: '#254226',
          950: '#102311',
        }
      }
    },
  },
  plugins: [],
}
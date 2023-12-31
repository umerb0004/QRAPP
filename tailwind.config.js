/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: ['Pacifico'],
      },
    },
    screens: {
      xs: '300px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xmd: '900px',
      // => @media (min-width: 1536px) { ... }
      '2xl': '1535px',
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
}

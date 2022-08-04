/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl':'9rem',
        '11xl':'10rem',
        '12xl':'11rem',
        '13xl':'12rem',
        '14xl':'15rem',
      },
    },
  },
  plugins: [
  ],
};

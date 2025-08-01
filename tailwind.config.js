/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(0, 0, 0, 0.3)', // 👈 now you can use `shadow-card`
      },
    },
  },
  plugins: [],
}

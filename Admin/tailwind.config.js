/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:"Poppins",
        robo:"Roboto"
      },
      colors:{
        brightred:"#C61919",
        primgreen:"#63D577",
        yello:"#F9B754",
        tagblue:"#4B6BFB",
        gray:"#F2F2F2"
      }
    },
  },
  plugins: [],
}


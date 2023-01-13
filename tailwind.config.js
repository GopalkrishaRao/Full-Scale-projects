/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'hblue':'#2874f0',
      'blue':'#3574f0',
      'footerblue':'#172336',
      'yellow':'#fce307',
      'bwhite':'#ffffff',
      'inputfieldWhite':'#fafafb',
      'white':'#feebe2',
      'black':'#1f1f1ff',
      'gray':'#8787886',
      'green':'#388e3d',
      'lgreen':'#1aba4e',
      'red':'#ff6164',
      'lred':'#fb641c',
      'orange':'#ff9f02',
    }
  },
  plugins: [require("daisyui")],
}

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
      // for headding
      'hblue':'#2874f0', 

      // for text
      'blue':'#3574f0',

      // for footer
      'footerblue':'#172336',

      // for buttons and logo
      'yellow':'#fce307',

      // for text in buttons
      'bwhite':'#ffffff',

      // for background of input area
      'inputfieldWhite':'#fafafb',

      // for text
      'white':'#feebe2',

      // back ground and text
      'black':'#1f1f1f',

      // text
      'gray':'#8787886',

      // rating 
      'green':'#388e3d',

      // for showing tags and offers
      'lgreen':'#1aba4e',

      // To show the number of items in the cart
      'red':'#ff6164',

      // buy now button
      'lred':'#fb641c',

      // add to cart button
      'orange':'#ff9f02',
    }
  },
  plugins: [require("daisyui")],
}

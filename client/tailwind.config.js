/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
      },
      textShadow: {
        'md': '0px 0px 7px rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        glow: '0 0 10px #f0f, 0 0 15px #f0f, 0 0 20px #f0f, 0 0 25px #f0f, 0 0 30px #f0f',
        'custom-dark': '0 0 10px 5px rgba(0, 0, 0, 0.1)'
      },
      height: {
        'custom': '.5px',
      },

    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//     fontFamily: {
//       banana: ['MS Ｐゴシック', 'MS PGothic', 'sans-serif'],
//       ringo: ['ヒラギノ角ゴシック', 'Hiragino Sans', 'メイリオ', 'Meiryo'],
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
      rotate: {
        'x-180': '180deg',
        'x-15': '15deg',
        'x--15': '-15deg',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '75%': { opacity: '0.75', transform: 'translateX(0)' },
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        textShadow: {
          outline: '0 0 2px #000', // 黒い縁取り
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
        underlineGrow: 'underlineGrow 0.7s ease-in forwards',
      },
      fontFamily: {
        genkaku: ['"Gen Kaku Gothic JP"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        zen: ['"Zen Kaku Gothic New"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
  ],
};

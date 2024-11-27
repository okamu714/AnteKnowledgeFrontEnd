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
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '75%': { opacity: '0.75', transform: 'translateX(0)' },
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
        underlineGrow: 'underlineGrow 0.7s ease-in forwards',
      },
      fontFamily: {
        genkaku: ['"Gen Kaku Gothic JP"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

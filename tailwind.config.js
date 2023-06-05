module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Regular: ['Regular']
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0px',
          },
          '100%': {
            width: '30px'
          }
        },
      },
      animation: {
        typing: 'typing 1.5s steps(20) infinite'
      },
      boxShadow: {
        '3xl': '2px 2px 0px rgba(128, 89, 230, 0.2)',
      }
    },
  },
  plugins: [],
};

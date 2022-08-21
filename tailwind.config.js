module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      laptop: '1024px',
      lg: '1239px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightGreen: '#F2F8F3',
        darkGreen: '#4B933F',
      },
    },
  },
  plugins: [],
};

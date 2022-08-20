module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
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

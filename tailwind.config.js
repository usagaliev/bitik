export default {
  theme: {
    extend: {
      colors: {
        brandPurple: '#6C63FF',
        brandPink: '#FF6F91',
        brandYellow: '#FFC75F',
        brandGray: '#DFDFDF',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        gradient: 'gradientMove 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientMove: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [],
};

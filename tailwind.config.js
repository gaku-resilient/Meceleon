/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'hammer-hit': 'hammerHit 0.35 ease-in-out'
      },
                    fontFamily: {
        roboto: ['Roboto', 'sans-serif'],

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hammerHit: {
          '0%': { tranform: 'translateY(0) rotate(0deg) scale(1)' },
          '30%': { tranform: 'translateY(10) rotate(50deg) scale(1.1)' },
          '60%': { tranform: 'translateY(0) rotate(0deg) scale(0.95)' },
          '100%': { tranform: 'translateY(0) rotate(0deg) scale(1)' },

        },
        

      },
    },
  },
  plugins: [],
}
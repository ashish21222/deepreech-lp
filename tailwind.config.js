/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ... existing extensions ...
      keyframes: {
        'path-reveal': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(1rem) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'path-glow': {
          '0%, 100%': {
            borderColor: 'rgb(192 132 252)', // purple-300
            boxShadow: '0 0 5px rgb(192 132 252)',
          },
          '50%': {
            borderColor: 'rgb(216 180 254)', // purple-200
            boxShadow: '0 0 15px rgb(216 180 254)',
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(10px)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'path-reveal': 'path-reveal 0.5s ease-out forwards',
        'path-glow': 'path-glow 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} 
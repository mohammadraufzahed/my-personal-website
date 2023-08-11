/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#092E20'
      },
      fontFamily: {
        'iran-yekan': ['"IRANYekanX"', 'tahoma', 'arial']
      },
      keyframes: {
        opacity: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1
          }
        },
        sidebar: {
          from: {
            transform: 'translateX(-50vw)'
          },
          to: {
            transform: 'translateX(0vw)'
          }
        }
      },
      animation: {
        sidebar: 'sidebar 1s 0.3s ease forwards',
        opacity: 'opacity .3s ease forwards'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        'text-primary': '#333333',
        'text-secondary': '#666666',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'sans-serif'
        ],
      },
      fontSize: {
        'xs': ['0.75rem', '1.5'],
        'sm': ['0.875rem', '1.5'],
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
      maxWidth: {
        '5xl': '64rem',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}


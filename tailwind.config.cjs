/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'oklch(0.97 0.024 213.79)',
          100: 'oklch(0.94 0.05 213.79)',
          200: 'oklch(0.86 0.1 213.79)',
          300: 'oklch(0.76 0.15 213.79)',
          400: 'oklch(0.7 0.19 213.79)',
          500: 'oklch(0.61 0.22 213.79)',
          600: 'oklch(0.52 0.2 213.79)',
          700: 'oklch(0.43 0.18 213.79)',
          800: 'oklch(0.37 0.15 213.79)',
          900: 'oklch(0.31 0.12 213.79)',
          950: 'oklch(0.18 0.07 213.79)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-700px 0',
          },
          '100%': {
            'background-position': '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e9f0',
          100: '#ccd3e1',
          200: '#99a7c3',
          300: '#667ba5',
          400: '#334f87',
          500: '#1a3d6b', // Main navy
          600: '#0f2d52',
          700: '#0a1f3a',
          800: '#051122',
          900: '#020811',
        },
        gold: {
          50: '#f5f2eb',
          100: '#ebe5d7',
          200: '#d7cbaf',
          300: '#c3b187',
          400: '#c3a76a', // Main accent color
          500: '#c3a76a', // Main accent color
          600: '#a8905a',
          700: '#8d794a',
          800: '#72623a',
          900: '#574b2a',
        },
        primary: {
          50: '#e6e9f0',
          100: '#ccd3e1',
          200: '#99a7c3',
          300: '#667ba5',
          400: '#334f87',
          500: '#1a3d6b',
          600: '#0f2d52',
          700: '#0a1f3a',
          800: '#051122',
          900: '#020811',
        },
        accent: {
          50: '#f5f2eb',
          100: '#ebe5d7',
          200: '#d7cbaf',
          300: '#c3b187',
          400: '#c3a76a', // Main accent color
          500: '#c3a76a', // Main accent color
          600: '#a8905a',
          700: '#8d794a',
          800: '#72623a',
          900: '#574b2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


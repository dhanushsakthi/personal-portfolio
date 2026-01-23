/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: "#020617",
        primary: {
          DEFAULT: "#1a73e8", // Google Blue
          medium: "#4285f4",
          light: "#d2e3fc",
        },
        secondary: "#5f6368", // Google Gray
        accent: "#34a853", // Google Green
        card: "rgba(15, 23, 42, 0.4)",
        slate: {
          950: "#020617",
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2.5rem',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'subtle-float': 'subtle-float 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(26, 115, 232, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(26, 115, 232, 0.4)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'google-card': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'google-hover': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'premium-glow': '0 0 20px rgba(26, 115, 232, 0.1)',
      }
    },
  },
  plugins: [],
}

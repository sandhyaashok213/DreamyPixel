import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dreamy: {
          purple: '#6338D6',
          deep: '#372078',
          lavender: '#EDE5FF',
          pink: '#FFDDF0',
          blue: '#E5EEFF',
          peach: '#FFF0E7',
          ink: '#21165B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        dreamy: '0 24px 70px rgba(55, 32, 120, 0.13)',
        soft: '0 12px 35px rgba(99, 56, 214, 0.10)',
      },
      backgroundImage: {
        'dreamy-gradient': 'linear-gradient(135deg, #6338D6 0%, #8A5AE7 45%, #F15DAF 100%)',
        'pastel-gradient': 'linear-gradient(135deg, #EDE5FF 0%, #FFDDF0 52%, #E5EEFF 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config

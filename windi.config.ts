import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import defaultTheme from 'windicss/defaultTheme'
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ninja: {
          50: '#F5F5F7',
          60: '#9E9E9E',
          70: '#1D1D1F',
          100: '#686870',
          200: '#F5F5F5',
          250: '#00CC2D',
          270: '#CCF5D5',
          300: '#D2D2D7',
          400: '#FF6633',
          470: '#FBDCD5',
        },
      },
      fontSize: {
        '4.5xl': ['2.625rem', '4rem'],
        '2.7xl': ['1.688rem', '2rem'],
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  extract: {
    exclude: ['node_modules/**/*', '.git/**/*'],
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
  },
  plugins: [formsPlugin, scrollSnapPlugin],
})

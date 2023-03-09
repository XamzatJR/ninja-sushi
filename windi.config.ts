import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import defaultTheme from 'windicss/defaultTheme'
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ninja: {
          50: '#F5F5F7',
          60: '#686870',
          69: '#9E9E9E',
          70: '#1D1D1F',
          100: '#686870',
          200: '#F5F5F5',
          300: '#D2D2D7',
          400: '#FF6633'
        }
      },
      fontSize: {
        '4.5xl': ['42px', '64px']
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    }
  },
  extract: {
    exclude: ['node_modules/**/*', '.git/**/*'],
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
  },
  plugins: [formsPlugin],
})

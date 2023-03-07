import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ninja: {
          100: '#686870',
          200: '#F5F5F5',
          300: '#D2D2D7',
          400: '#FF6633'
        }
      }
    }
  },
  extract: {
    exclude: ['node_modules/**/*', '.git/**/*'],
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
  },
  plugins: [formsPlugin],
})

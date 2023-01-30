import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  theme: {},
  extract: {
    exclude: ['node_modules/**/*', '.git/**/*'],
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
  },
  plugins: [formsPlugin],
})

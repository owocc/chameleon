import type { Config } from 'tailwindcss'
import tailwindScrollBar from 'tailwind-scrollbar'
import { tailwindElectronPlugin } from './src/renderer/lib/tailwindElectronPlugin'

export default {
  content: [
    './src/renderer/index.html',
    './src/renderer/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        nav: 'var(--header-height)'
      },
      padding: {
        nav: 'var(--header-height)'
      },
      margin: {
        nav: 'var(--header-height)'
      }
    }
  },
  darkMode: ['selector', '[data-mode="dark"]'],
  plugins: [tailwindElectronPlugin, tailwindScrollBar({ nocompatible: true })]
} satisfies Config

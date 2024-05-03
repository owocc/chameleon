import type { Config } from 'tailwindcss'
import flowbitePlugin from 'flowbite/plugin'
import tailwindScrollBar from 'tailwind-scrollbar'
import { tailwindElectronPlugin } from './src/shared/tailwind/tailwindElectronPlugin'

export default {
  content: [
    './src/renderer/index.html',
    './src/renderer/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js'
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
  plugins: [flowbitePlugin, tailwindElectronPlugin, tailwindScrollBar({ nocompatible: true })]
} satisfies Config

import plugin from 'tailwindcss/plugin'
export const tailwindElectronPlugin = plugin(function ({ addUtilities }) {
  // addVariant('macos', '@media (inverted-colors: inverted)')
  addUtilities({
    '.drag': {
      '-webkit-app-region': 'drag'
    },
    '.drag-none': {
      '-webkit-app-region': 'no-drag'
    }
  })
})

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      red: '#F54E52',
      blue: '#7DF7FF',
      pink: '#DABABA',
      yellow: '#FFF064'
    },
    fontFamily: {
      sans: ['Articulat', 'sans-serif']
    },
    extend: {
      maxWidth: {
        380: '380px'
      }
    }
  },
  variants: {},
  plugins: []
}

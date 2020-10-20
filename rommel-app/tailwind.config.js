const px = (pixels) => {
  return `${pixels / 16}rem`
}

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
    fontSize: {
      xs: px(12),
      sm: px(14),
      base: px(15),
      lg: px(18),
      xl: px(20),
      '2xl': px(24),
      '3xl': px(30),
      '4xl': px(36),
      '5xl': px(48),
      '6xl': px(64)
    },
    extend: {
      screens: {
        xs: '480px'
      },
      maxWidth: {
        380: '380px'
      }
    }
  },
  variants: {},
  plugins: []
}

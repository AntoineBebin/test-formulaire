const brandColors = {
  black: '#000000',
  gray75: '#2e2e2c',
  gray60: '#666666',
  gray50: '#7f7f7f',
  gray40: '#999999',
  gray30: '#b2b2b2',
  gray20: '#cccccc',
  gray10: '#e5e5e5',
  gray5: '#ebebea'
} as const

const themeColors = {
  black: '#202124',
  secondaryBlack: '#0C191F',
  white: '#fcfcfc',
  text: '#202124',
  dandelion: '#FFD966',
  transparent: 'rgba(255, 255, 255, 0)'
} as const

const colors = {
  ...brandColors,
  ...themeColors,
  primary: themeColors.dandelion,
  secondary: themeColors.white
}

export default colors

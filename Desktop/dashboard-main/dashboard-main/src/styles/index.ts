import animations from './animations'
import colors from './colors'
import fonts from './fonts'
import shadows from './shadows'
import spacings from './spacings'
import transitions from './transitions'
import variables from './variables'

const styles = {
  fonts,
  colors,
  shadows,
  spacings,
  variables,
  transitions,
  animations
}

export type Theme = typeof styles

export type Color = keyof typeof colors

export function getColor(color: Color): string {
  return colors[color as Color]
}

export default styles

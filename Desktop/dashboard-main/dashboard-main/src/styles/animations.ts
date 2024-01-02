import { keyframes } from 'styled-components'

export const fade = (start = 0, end = 1) => keyframes`
  0% {
    opacity: ${start};
  }

  100% {
    opacity: ${end};
  }
`

const animations = {
  fade
}

export default animations

import styled from 'styled-components'

export interface BlurOverlayProps {
  backdropColor?: string
  blur?: string
}

export const BlurOverlay = styled.div<BlurOverlayProps>`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ backdropColor }) => backdropColor ?? `rgba(8, 13, 15, 0.2)`};
  backdrop-filter: ${({ blur }) => `blur(${blur ?? '8px'})`};
  display: block;
  width: 100vw;
  height: 100vh;
  will-change: opacity;
  inset: 0;
  z-index: 9999;
`

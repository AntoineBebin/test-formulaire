import styled, { css } from 'styled-components'

export interface SpaceProps {
  display?: 'inline-block' | 'block'
  margin?: boolean | string
  padding?: boolean | string
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export const Space = styled.div<SpaceProps>`
  ${({ display }) => `
      display: ${display ?? 'block'};
  `}

  ${({ margin, top, bottom, left, right }) =>
    typeof margin === 'boolean'
      ? css`
          margin-top: ${top};
          margin-bottom: ${bottom};
          margin-right: ${right};
          margin-left: ${left};
        `
      : css`
          margin: ${margin};
        `}

  ${({ padding, top, bottom, left, right }) =>
    typeof padding === 'boolean'
      ? css`
          padding-top: ${top};
          padding-bottom: ${bottom};
          padding-right: ${right};
          padding-left: ${left};
        `
      : css`
          padding: ${padding};
        `}
`

export default Space

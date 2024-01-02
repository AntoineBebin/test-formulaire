import React from 'react'
import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components'

import styles from '@/styles'
import { Breakpoints, mediaQuery } from '@/styles/media'

import { MediaQueryObject } from '../common'
import { Space, SpaceProps } from '../Space'

interface BoxProps extends SpaceProps {
  flex?: boolean
  full?: 'width' | 'height' | true
  fullWidth?: boolean
  col?: boolean
  center?: boolean
  width?: string
  height?: string
  relative?: boolean
  wrap?: 'wrap' | 'nowrap'
  spaceAfter?: string
  maxWidth?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
  overflow?: 'hidden' | 'visible' | 'scroll' | 'auto' | 'hidden' | 'visible'
  overflowX?: 'hidden' | 'visible' | 'scroll' | 'auto' | 'hidden' | 'visible'
  overflowY?: 'hidden' | 'visible' | 'scroll' | 'auto' | 'hidden' | 'visible'
  gap?: string
  grow?: number
  shrink?: number
  basis?: string
  justify?: 'space-between' | 'center' | 'flex-start' | 'flex-end' | 'space-around'
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
  backgroundColor?: keyof typeof styles.colors | string
  color?: keyof typeof styles.colors | string
  visibility?: 'hidden' | 'visible'
  order?: '1' | '2' | '3' | '4'
  media?: MediaQueryObject<BoxProps>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any> | undefined
  cursor?: string
}

function normalize({
  theme,
  flex,
  justify,
  align,
  center,
  wrap,
  col,
  gap,
  relative,
  spaceAfter,
  backgroundColor,
  color,
  grow,
  shrink,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  width,
  height,
  full,
  fullWidth,
  overflow,
  overflowX,
  overflowY,
  cursor,
  margin,
  top,
  bottom,
  left,
  right,
  padding,
  visibility,
  order
}: ThemedStyledProps<Omit<BoxProps, 'media' | 'as'>, DefaultTheme>) {
  return css`
    position: ${relative && `relative`};
    display: ${flex && `flex`};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap && `wrap`};
    flex-direction: ${col && `column`};
    gap: ${gap};
    visibility: ${visibility && 'hidden'};
    order: ${order};

    ${center &&
    css`
      align-items: center;
      justify-content: center;
    `}

    ${full &&
    css`
      width: ${(typeof full === 'boolean' || full === 'width') && `100%`};
      height: ${(typeof full === 'boolean' || full === 'height') && `100%`};
    `}

    width: ${fullWidth && `100%`};
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    background: ${backgroundColor && backgroundColor in theme.colors
      ? theme.colors[backgroundColor as keyof typeof styles.colors]
      : backgroundColor};
    color: ${color && (color in theme.colors ? theme.colors[color as keyof typeof styles.colors] : color)};
    margin-bottom: ${spaceAfter};
    width: ${width};
    height: ${height};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    max-height: ${maxHeight};
    min-height: ${minHeight};
    overflow: ${overflow};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};
    cursor: ${cursor};

    ${typeof margin === 'boolean'
      ? css`
          margin-top: ${top};
          margin-bottom: ${bottom};
          margin-right: ${right};
          margin-left: ${left};
        `
      : css`
          margin: ${margin};
        `}

    ${typeof padding === 'boolean'
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
}

export const Box = styled(Space)<BoxProps>`
  ${props => normalize(props)}

  ${({ media, theme }) =>
    media &&
    Object.entries(media).map(([query, value]) => {
      if (typeof value !== 'undefined') {
        return css`
          ${mediaQuery(query as keyof Breakpoints)} {
            ${normalize({ theme, ...value })}
          }
        `
      }
      return null
    })}
`

export default Box

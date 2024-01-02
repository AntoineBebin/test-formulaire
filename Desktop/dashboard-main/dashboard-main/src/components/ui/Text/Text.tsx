import React from 'react'
import styled, { DefaultTheme, ThemedStyledProps, css } from 'styled-components'

import styles from '@/styles'
import { Breakpoints, mediaQuery } from '@/styles/media'

import { MediaQueryObject } from '../common'

type Align = 'left' | 'center' | 'right' | 'justify'

type Weight =
  | 'bold'
  | 'normal'
  | 'lighter'
  | 'bolder'
  | 'initial'
  | 'inherit'
  | 'revert'
  | 'unset'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

// type Space = 'null' | 'none' | 'smallest' | 'small' | 'normal' | 'medium' | 'large' | 'largest'

interface SpaceMargin {
  mb?: string
  mt?: string
  ml?: string
  mr?: string
}

interface TitleProps extends SpaceMargin {
  align?: Align
  fontSize?: string
  weight?: Weight
  lineHeight?: string
  color?: keyof typeof styles.colors | string
  full?: boolean
  block?: boolean
  inlineBlock?: boolean
  uppercase?: boolean
  spaceAfter?: string
  italic?: boolean
  height?: string
  width?: string
  maxWidth?: string
  nowrap?: boolean
  truncate?: boolean
  visibility?: string
  order?: string
  media?: MediaQueryObject<TitleProps>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any> | undefined
}

const normalize = ({
  theme,
  fontSize,
  color,
  weight,
  lineHeight,
  italic,
  align,
  block,
  inlineBlock,
  uppercase,
  spaceAfter,
  nowrap,
  mb,
  mt,
  ml,
  mr,
  width,
  maxWidth,
  truncate,
  visibility,
  order
}: ThemedStyledProps<Omit<TitleProps, 'media' | 'as'>, DefaultTheme>) => css`
  display: ${(block && `block`) ?? (inlineBlock && `inline-block`)};
  line-height: ${lineHeight};
  font-size: ${fontSize};
  font-weight: ${weight};
  color: ${color && color in theme.colors && theme.colors[color as keyof typeof styles.colors] ? theme.colors : color};
  font-style: ${italic && `italic`};
  text-align: ${align};
  margin-bottom: ${spaceAfter};
  white-space: ${nowrap && 'nowrap'};
  text-transform: ${uppercase && `uppercase`};
  visibility: ${visibility};
  order: ${order};

  margin-top: ${mt};
  margin-bottom: ${mb};
  margin-left: ${ml};
  margin-right: ${mr};

  width: ${width};
  max-width: ${maxWidth};

  ${truncate &&
  `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Text = styled.p<TitleProps>`
  font-family: 'Urbanist', sans-serif;
  line-height: 1.6rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

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

export default Text

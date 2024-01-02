import React, { FunctionComponent } from 'react'
import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components'

import { Color, getColor } from '@/styles'
import { Breakpoints, mediaQuery } from '@/styles/media'

import { MediaQueryObject, StyledBaseProps } from '../common'

type StyledHeadingProps = StyledBaseProps & {
  element: string | React.ComponentType<any>
}

const variants = {
  h1: css`
    font-size: 4.8rem;
    line-height: 5.6rem; /* 116.667% */
  `,
  h2: css`
    font-size: 4rem;
    line-height: 5rem;
  `,
  h3: css`
    font-size: 3.2rem;
    line-height: 4rem; /* 125% */
  `,
  h4: css`
    font-size: 2.4rem;
    line-height: 1.5;
  `,
  h5: css`
    font-size: 2rem;
    line-height: 1.4;
  `
}

export type Align = 'left' | 'center' | 'right' | 'justify'

export type Weight =
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

export interface StyledProps {
  align?: Align
  weight?: Weight
  color?: Color
  width?: string
  maxWidth?: string
  spaceAfter?: string
  lineHeight?: string
  fontSize?: string
  variant?: keyof typeof variants
  media?: MediaQueryObject<StyledProps>
}

export type HeadingProps = {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode
  as?: string | React.ComponentType<any> | undefined
} & StyledProps

const normalize = ({
  color,
  weight,
  align,
  spaceAfter,
  width,
  maxWidth,
  variant,
  lineHeight,
  fontSize
}: ThemedStyledProps<Omit<StyledProps, 'media'>, DefaultTheme>) => css`
  font-weight: ${weight};
  color: ${color && getColor(color ?? 'black')};
  text-align: ${align};
  margin-bottom: ${spaceAfter};
  width: ${width};
  max-width: ${maxWidth};

  ${variant && variants[variant]}

  line-height: ${lineHeight};
  font-weight: ${weight};
  font-size: ${fontSize};
`

export const StyledHeading = styled<FunctionComponent<StyledHeadingProps>>(({ element: Component, children, className }) => (
  <Component className={className}>{children}</Component>
))<StyledProps>`
  font-family: 'Urbanist', serif, sans-serif;
  font-style: normal;
  line-height: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

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

export const Heading: React.FC<HeadingProps> = ({ size = 'h2', as, variant, children, ...props }) => {
  return (
    <StyledHeading element={as ?? size} variant={variant ?? size} {...props}>
      {children}
    </StyledHeading>
  )
}

export default Heading

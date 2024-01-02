import React from 'react'
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'

import { ButtonOrLinkProps, ButtonOrLink } from '../ButtonOrLink'
import Icon from '../Icon'

type Style = FlattenInterpolation<ThemeProps<DefaultTheme>>

export interface ButtonVariant {
  primary: Style
  secondary: Style
  metallic: Style
  outline: Style
}

export interface ButtonSize {
  sm: Style
  md: Style
  lg: Style
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = {
  variant?: keyof ButtonVariant
  size?: keyof ButtonSize
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  rounded?: boolean // 'sm' | 'md' | 'lg' | 'full'
  square?: boolean
  className?: string
} & IconProps &
  ButtonOrLinkProps

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      type = 'button',
      variant = 'primary',
      size = 'md',
      rounded = true,
      loading = false,
      fullWidth = false,
      className,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isLink = typeof href !== 'undefined'
    const ButtonOrLink = (isLink ? 'a' : 'button') as React.ElementType

    return (
      <CustomButtonOrLink
        as={ButtonOrLink}
        rounded={rounded}
        href={href}
        type={!isLink ? type : undefined}
        className={className}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        ref={ref}
        {...props}
      >
        {loading && <Icon icon="Loading" fill={variant === 'primary' ? 'white' : 'black'} size={20} />}
        {!loading && startIcon}
        <span>{children}</span>
        {!loading && endIcon}
      </CustomButtonOrLink>
    )
  }
)

Button.displayName = 'Button'

// Button variant
const variants: ButtonVariant = {
  primary: css`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.primary};

    &:hover,
    &:active {
      &:not([disabled]) {
        opacity: 0.8;
      }
    }
  `,
  secondary: css`
    color: ${props => props.theme.colors.white};
    background-color: rgb(43, 49, 57);

    &:hover,
    &:active {
      &:not([disabled]) {
        opacity: 0.8;
      }
    }
  `,
  metallic: css`
    color: #f5f5f5;
    background-color: #0e738a;

    font-weight: 600;

    &:hover,
    &:active {
      &:not([disabled]) {
        opacity: 0.8;
      }
    }
  `,
  outline: css`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.transparent};
    border: 2px solid ${props => props.theme.colors.black};

    &:hover,
    &:active {
      &:not([disabled]) {
        opacity: 0.8;
      }
    }
  `
}

// Button size
const sizes: ButtonSize = {
  sm: css`
    padding: 1.2rem 2rem;
  `,
  md: css`
    padding: 1.2rem 2rem;
  `,
  lg: css`
    padding: 1.2rem 2rem;
  `
}

const CustomButtonOrLink = styled(ButtonOrLink)<{ variant: keyof ButtonVariant; size: keyof ButtonSize; square?: boolean }>`
  transition: opacity 200ms linear;
  height: fit-content;

  ${({ variant }) => variants[variant]}
  ${({ size }) => sizes[size]}


  ${({ square }) =>
    square &&
    css`
      width: 48px;
      height: 48px;
      padding: 12px;
    `}
`

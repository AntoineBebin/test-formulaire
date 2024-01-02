import React, { ComponentPropsWithRef } from 'react'
import styled, { css } from 'styled-components'

export type ButtonOrLinkProps = ComponentPropsWithRef<'button'> & ComponentPropsWithRef<'a'>

export type Props = ButtonOrLinkProps & {
  as: 'button' | 'a'
  children: React.ReactNode
  className?: string
  fullWidth: boolean
  rounded: boolean
}

export const StyledButton = styled.button`
  appearance: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1.4rem;
  font-family: inherit;
  font-weight: 600;
  color: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 1.2rem 2rem;
  align-items: flex-start;
  line-height: 2.4rem;
  word-break: keep-all;
  min-height: 48px;
  border: none;
  border-radius: 4px;

  text-transform: uppercase;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ButtonOrLink = styled(StyledButton)<Props>`
  ${({ theme, rounded, fullWidth }) => css`
    border-radius: ${rounded && theme.variables.buttonBorderRadius};
    width: ${fullWidth ? '100%' : 'fit-content'};
  `}

  span {
    //font-family: 'Outfit
    display: inline-block;
    font-size: 1.4rem;
    font-weight: inherit;
    line-height: 2.4rem; /* 171.429% */
    white-space: nowrap;
    color: inherit;
    text-transform: uppercase;
  }
`

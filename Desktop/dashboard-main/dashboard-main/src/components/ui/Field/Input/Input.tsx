import React from 'react'
import styled, { css } from 'styled-components'

export interface InputProps {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  type?: 'email' | 'password' | 'search' | 'text'
  outline?: boolean
}

export type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export type InputWithAttributesProps = InputProps & InputAttributes

export const Input = React.forwardRef<HTMLInputElement, InputWithAttributesProps>((props, ref) => {
  const { leftIcon, rightIcon, type = 'text', prefix, outline, ...rest } = props

  return (
    <InputWrapper outline={outline}>
      <InputInner>
        {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
        {prefix && <InputPrefix>{prefix}</InputPrefix>}
        <InputStyled ref={ref} type={type} {...rest} />
        {rightIcon}
      </InputInner>
    </InputWrapper>
  )
})

Input.displayName = 'Input'

export default Input

export const InputWrapper = styled.div<{ outline?: boolean }>`
  //background-color: rgba(43, 47, 54, 0.9);
  cursor: text;
  display: flex;
  align-items: stretch;
  text-decoration: none;
  flex-direction: row;
  margin: 0;
  padding: 1px;
  //border: 1px solid rgba(43, 47, 54, 0.8);
  background-color: #fdfdfd;
  border-radius: ${({ theme }) => theme.variables.buttonBorderRadius};
  min-height: 4.8rem;
  height: 4.8rem;
  overflow: hidden;
  width: 100%;
  transition: border-color 200ms cubic-bezier(0.64, 0, 0.35, 1) 0s;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);

  :focus-within {
    border: 2px solid var(--input-border-selected, #0e738a);
  }

  ${({ outline }) =>
    outline &&
    css`
      padding: 0;
      border: 0;
      background-color: transparent;
      border-bottom: 3px solid rgba(43, 47, 54, 0.9);

      &:focus-within {
        border-bottom-color: rgb(14, 203, 129);
      }

      ${InputInner} {
        padding: 0;
      }
    `}
`

export const InputInner = styled('div')`
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: row;
  flex-grow: 1;
  margin: -1px;
  padding: 9px 12px;
  border: 0;
  .read-only {
    display: flex;
    height: 4.8rem;
    padding: var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) 1.6rem;
    align-items: center;
    gap: 1.6rem;
    border-radius: var(--radius-element, 0.4rem);
    background: var(--colors-secondary-black-50, #d2d3d3);
    box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  }
`

export const InputStyled = styled('input')`
  border: 0;
  outline: none;
  cursor: inherit;
  padding: 18px 4px;
  color: #202124;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  height: 100%;
  min-width: 0;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  margin: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #b5b5b6;
  }
`

const InputPrefix = styled.span`
  flex-grow: 0;
  font-size: 14px;
  line-height: 18px;
  border: none;
  outline: none;
  margin-right: 5px;
`

const IconWrapper = styled.span`
  margin-left: 4px;
  margin-right: 8px;
`

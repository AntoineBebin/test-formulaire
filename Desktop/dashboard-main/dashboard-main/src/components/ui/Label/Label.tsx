import styled, { css } from 'styled-components'

interface LabelProps {
  background?: string
  color?: string
}

export const Label = styled.span<LabelProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  background: #e6e6e6;
  width: fit-content;

  color: #6c6d70;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;

  ${({ color, background }) => css`
    color: ${color ?? '#6c6d70'};
    background: ${background ?? '#e6e6e6'};
  `}
`

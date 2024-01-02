import styled from 'styled-components'

interface CardProps {
  width?: string
}

// Todo use props to config card
export const Card = styled.div<CardProps>`
  position: relative;
  width: ${({ width }) => width};
  height: auto;
  background: ${props => props.theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  z-index: ${props => props.theme.variables.zIndex.card};
`

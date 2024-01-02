import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'

interface NavBarSelectorProps {
  activeIndex: number
  items: string[]
  orientation?: 'horizontal' | 'vertical'
  onSelected?: (index: number) => void
}

export const NavBarSelector: React.FC<NavBarSelectorProps> = ({ activeIndex, items, onSelected }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [buttonWidth, setButtonWidth] = useState(232)

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        const bounding = buttonRef.current.getBoundingClientRect()
        const width = bounding.width
        const value = Math.round(width * 100) / 100

        setButtonWidth(value)
      }
    }

    // Écoute de l'événement de redimensionnement sur la fenêtre
    window.addEventListener('resize', handleResize)

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box relative>
      <StyledBox>
        {items.map((item, index) => (
          <StyledButton
            key={item}
            ref={index === 0 ? buttonRef : null}
            activated={activeIndex === index}
            onClick={() => onSelected?.call(null, index)}
          >
            {item}
          </StyledButton>
        ))}
      </StyledBox>
      <Indicator width={buttonWidth + 'px'} translateX={activeIndex * (buttonWidth + 16) + 8} />
    </Box>
  )
}

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
  border-radius: 0.4rem;
  background: #fcfcfc;

  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);

  padding: 0.8rem;
`

const StyledButton = styled.button<{ activated?: boolean }>`
  white-space: nowrap;
  appearance: none;
  cursor: pointer;
  display: flex;
  padding: 1.6rem 2.4rem;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.4rem;
  color: rgba(108, 109, 112, 0.6);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-transform: uppercase;
  transition: color 1s ease;

  width: 23.2rem;

  ${({ activated }) =>
    activated &&
    css`
      color: #202124;
      /* font-weight: 700; */
      border-radius: 0.4rem;
      box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
    `}

  background-color: transparent;

  z-index: 2;

  /*
  &:nth-child(1) {
    border: 1px solid red;
  }

  &:nth-child(2) {
    border: 1px solid blue;
  }

  &:nth-child(3) {
    border: 1px solid black;
  } */
`

const Indicator = styled.div<{ width: string; translateX: number }>`
  position: absolute;
  top: 0.8rem;
  bottom: 0.8rem;
  width: ${({ width }) => width};
  height: auto;
  border-radius: 0.4rem;
  background-color: #ffd966;
  transition: transform 0.3s ease-in-out;

  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`

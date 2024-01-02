import { useState } from 'react'
import styled from 'styled-components'

import Icon from '../Icon'
interface DropdownMenuProps {
  isOpen: boolean
}

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Selectionnez une option <Icon icon="ChevronDown" size={24}></Icon>
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </DropdownMenu>
    </DropdownContainer>
  )
}
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`
const DropdownButton = styled.button`
  display: flex;
  padding: var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) 1.6rem;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;
  background: var(--colors-secondary-white-50, #fdfdfd);
  cursor: pointer;
  height: 48px;
  overflow: hidden;
  color: #b5b5b6;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
`
const DropdownMenu = styled.ul<DropdownMenuProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fdfdfd;
  border-top: 1px solid #d2d3d3;
  list-style: none;
  padding: 0.8rem 1.6rem;
  z-index: 1;
  gap: 0.8rem;
`

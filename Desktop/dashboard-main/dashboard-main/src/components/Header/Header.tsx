import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { mediaQuery } from '@/styles/media'

import ContainerLayout from '../layout/ContainerLayout'
import { Box, Button, Logo } from '../ui'
import Icon from '../ui/Icon'

import { ProductModal } from './ModalHeader/ProductModal'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalMouseLeave = () => {
    closeModal()
  }

  return (
    <Box fullWidth>
      <StyledHeader>
        <ContainerLayout>
          <Box flex full align="center" justify="space-between">
            <Logo />
            <StyledMenu>
              <Box flex align="center" gap="4rem" as="ul">
                <li>
                  <NavLinkProduct to="produits" onMouseEnter={openModal} isBold={isModalOpen} className={isModalOpen ? 'actived' : ''}>
                    Product
                  </NavLinkProduct>
                  {isModalOpen && (
                    <ProductModalContainer onMouseLeave={handleModalMouseLeave}>
                      <ProductModal>
                        <div></div>
                      </ProductModal>
                    </ProductModalContainer>
                  )}
                </li>
                <li>
                  <StyledNavLink to="tarifs">Tarifs</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="qui-sommes-nous">Qui sommes-nous</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="actualites">Actualités</StyledNavLink>
                </li>
                <li>
                  <Button square href="/auth/login" startIcon={<Icon icon="User" />} />
                </li>
              </Box>
            </StyledMenu>
          </Box>
        </ContainerLayout>
      </StyledHeader>
    </Box>
  )
}

const StyledHeader = styled.header`
  height: 80px;
  /* border: 1px solid red; */
  z-index: ${props => props.theme.variables.zIndex.header};
`

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  -webkit-tap-highlight-color: transparent;
  color: #202124; //TODO: Update to use text colors theme
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-align: start;
  width: 100%;

  &:hover {
    color: #202124; //TODO: Update to use text colors theme
  }

  &.actived {
    color: #202124; //TODO: Update to use text colors theme
  }

  ${mediaQuery('md')} {
    visibility: hidden;
  }
`
export const NavLinkProduct = styled(NavLink)<{ isBold: boolean }>`
  position: relative;
  -webkit-tap-highlight-color: transparent;
  color: ${props => (props.isBold ? '#202124' : '#202124')}; //TODO: Update to use text colors theme
  text-align: center;
  font-size: 2rem;
  font-weight: ${props => (props.isBold ? '700' : '500')};
  line-height: 2.4rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-align: start;
  width: 100%;

  &::after {
    content: '';
    display: block;
    width: 0;
    border-bottom: ${props => (props.isBold ? '2px solid #ffd966' : '0')};
    transition: width 0.3s;
  }
  &:hover {
    color: #202124; //TODO: Update to use text colors theme
  }
  &:hover::after,
  &.actived::after {
    width: 100%;
  }

  ${mediaQuery('md')} {
    visibility: hidden;
  }
`
const ProductModalContainer = styled.div`
  position: relative;
  display: inline-flex;
  left: -270%;
`

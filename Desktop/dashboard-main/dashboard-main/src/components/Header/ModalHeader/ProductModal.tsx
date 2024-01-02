import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Image from '@/assets/images/3d-casual-life-design-composition.png'
import { Box } from '@/components/ui'
import Icon from '@/components/ui/Icon'
interface ProductModalProps {
  children: React.ReactNode
}
export const ProductModal: React.FC<ProductModalProps> = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        {children}

        <Box width="100%" flex col align="flex-start" gap="0.8rem" left="10%">
          <EasyImage flex align="flex-end" gap="0.8rem" padding="0.8rem">
            <EasyNavLink to="/produits">EasyCra</EasyNavLink>
            <Icon icon="ChevronRight" size={16}></Icon>
          </EasyImage>
          <StyledNavLink to="*">Fonctionnalités</StyledNavLink>
          <StyledNavLink to="*">Intégration</StyledNavLink>
          <StyledNavLink to="/produits/pro">Pro</StyledNavLink>
          <StyledNavLink to="*">Guides</StyledNavLink>
          <StyledNavLink to="*">F.A.Q</StyledNavLink>
        </Box>
        <Line />
        <Box width="100%" flex col align="flex-start" gap="0.8rem">
          <EasyImage flex align="flex-end" gap="0.8rem" padding="0.8rem">
            <EasyNavLink to="/produits/events">EasyEvent</EasyNavLink>
            <Icon icon="ChevronRight" size={16}></Icon>
          </EasyImage>
          <StyledNavLink to="*">Fonctionnalités</StyledNavLink>
          <StyledNavLink to="*">Intégration</StyledNavLink>
          <StyledNavLink to="/produits/pro">Pro</StyledNavLink>
          <StyledNavLink to="*">Guides</StyledNavLink>
          <StyledNavLink to="*">F.A.Q</StyledNavLink>
        </Box>
      </ModalContent>
    </ModalContainer>
  )
}

const ModalContainer = styled(Box)`
  position: relative;
  display: inline-flex;
  left: -275%;
`

const ModalContent = styled(Box)`
  position: absolute;
  display: inline-flex;
  align-items: flex-start;
  z-index: 1;
  width: 465px;
  padding: 1.6rem;
  gap: 1.6rem;
  border-radius: var(--radius-container, 0.8rem);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const StyledNavLink = styled(NavLink)`
  color: #6a6b6d;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0.08rem;
`
const EasyNavLink = styled(NavLink)`
  color: #6a6b6d;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.112rem;
  text-transform: uppercase;

  &:hover {
    color: #202124; //TODO: Update to use text colors theme
  }
`
const Line = styled.div`
  width: 0.1rem;
  height: 24rem;
  background: #d2d3d3;
`
const EasyImage = styled(Box)`
  height: 8rem;
  width: 100%;
  border-radius: 0.4rem;
  background: center no-repeat #cfe3e8 url(${Image});
`

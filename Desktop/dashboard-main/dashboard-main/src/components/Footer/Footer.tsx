import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import ContainerLayout from '../layout/ContainerLayout'
import { Newsletter } from '../Newsletter'
import { Box, Logo, Text } from '../ui'
import Icon from '../ui/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <Box flex col gap="4rem">
        <ContainerLayout>
          <Box
            flex
            align="flex-start"
            gap="8rem"
            media={{
              md: {
                flex: true,
                col: true,
                align: 'center',
                gap: '1.6rem'
              }
            }}
          >
            <Logo />
            <Box
              flex
              gap="4rem"
              media={{
                md: {
                  col: true,
                  align: 'center',
                  gap: '0.8rem'
                }
              }}
            >
              <Box flex col gap="2.4rem">
                <StyledLink to=".">Accueil</StyledLink>
                <Box flex col gap="0.8rem">
                  <StyledLink to="produits">Produit</StyledLink>
                  <StyledLink to="produits" subLink>
                    EasyCra
                  </StyledLink>
                  <StyledLink to="produits/events" subLink>
                    EventPlanner
                  </StyledLink>
                </Box>
                <StyledLink to="tarifs">Tarifs</StyledLink>
              </Box>
              <Box flex col>
                <Box
                  flex
                  col
                  gap="2.4rem"
                  media={{
                    md: {
                      align: 'center',
                      gap: '0.8rem'
                    }
                  }}
                >
                  <StyledLink to="qui-sommes-nous">Qui sommes-nous ?</StyledLink>
                  <Box flex col gap="0.8rem">
                    <StyledLink to=".">Ressources</StyledLink>
                    {/* <StyledLink to="." subLink>
                      F.A.Q
                    </StyledLink> */}
                    <StyledLink to="." subLink>
                      Intégration
                    </StyledLink>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box flex col grow={1} gap="2.4rem">
              <Box
                flex
                col
                gap="0.8rem"
                media={{
                  md: {
                    align: 'center'
                  }
                }}
              >
                <StyledLink as="p">Newsletter</StyledLink>
                <StyledLink as="span" subLink>
                  Inscrivez-vous à notre newsletter pour ne rater aucune infos sur les solutions DéjàVu !
                </StyledLink>
              </Box>
              <Newsletter fullWidth />
            </Box>
          </Box>
        </ContainerLayout>
        <StyledBoxLine flex col padding="2.4rem 0">
          <ContainerLayout>
            <Box
              flex
              align="center"
              justify="space-between"
              media={{
                md: {
                  flex: true,
                  col: true,
                  align: 'center',
                  gap: '4rem'
                }
              }}
            >
              <Text as="span" inlineBlock>
                © 2023 DéjàVu LLC
              </Text>
              <Box flex gap="4rem">
                <StyledLink subLink to="/politique-confidentialite" target="_blank">
                  Politique de confidentialité
                </StyledLink>
                <StyledLink subLink to="/conditions-utilisations" target="_blank">
                  Conditions d’utilisations
                </StyledLink>
                <StyledLink subLink to="/mentions-legales" target="_blank">
                  Mentions légales
                </StyledLink>
              </Box>
              <Box flex gap="2.4rem">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <SocialWrapper>
                    <Icon icon="Facebook" />
                  </SocialWrapper>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <SocialWrapper>
                    <Icon icon="Instagram" />
                  </SocialWrapper>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <SocialWrapper>
                    <Icon icon="Linkedin" />
                  </SocialWrapper>
                </a>
              </Box>
            </Box>
          </ContainerLayout>
        </StyledBoxLine>
      </Box>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding-top: 64px;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px -16px 64px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  z-index: ${props => props.theme.variables.zIndex.footer};
`

const StyledBoxLine = styled(Box)`
  border-top: 0.1rem solid #b7b7b7;
`

export const StyledLink = styled(NavLink)<{ subLink?: boolean }>`
  ${({ subLink }) =>
    subLink
      ? css`
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 1.6rem;
          color: #6c6d70;
        `
      : css`
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 2rem;
          color: #202124;
        `};
`

const SocialWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 2px solid #202124;
`

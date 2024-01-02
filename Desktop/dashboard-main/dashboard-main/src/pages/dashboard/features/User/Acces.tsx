import React from 'react'
import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import { mediaQuery } from '@/styles/media'

import { useModal } from '../../components/ModalContext'

export const Acces = () => {
  const { openModal } = useModal()

  const handleOpenModalAcces = () => openModal('Acces')

  return (
    <>
      <Box>
        <Box flex align="flex-end" justify="space-between" minWidth="39.6rem">
          <Box flex justify="center" align="center" gap="0.8rem">
            <IconBox>
              <Icon icon="Lock" size={16} />
            </IconBox>
            <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" uppercase>
              Accès
            </Text>
          </Box>
          <Box
            flex
            align="center"
            justify="center"
            gap="0.8rem"
            media={{
              md: {
                visibility: 'hidden'
              }
            }}
          >
            <Text fontSize="1.4rem" weight={700} lineHeight="1.6em" uppercase color="#0E738A">
              Modifier mes identifiants
            </Text>
            <Icon icon="Edit" size={16} cursorPointer onClick={handleOpenModalAcces}></Icon>
          </Box>
        </Box>
        <StyledBox>
          <Box flex col align="flex-start" gap="0.8rem">
            <Box flex align="flex-start" gap="0.8rem">
              <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                Adresse email:
              </Text>
              <Texte>j******************e@a****i.com</Texte>
            </Box>
            <Box flex align="flex-start" gap="0.8rem">
              <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                Authentification en deux étapes:
              </Text>
              <Texte>
                <span>Inactive</span>
              </Texte>
            </Box>
          </Box>
          <Box flex col align="center" gap="16px">
            <Box align="center" justify="center" gap="8px">
              <Text uppercase fontSize="1.6rem" weight={700} lineHeight="114.286%">
                Me déconnecter de tous les appareils
              </Text>
            </Box>
            <BlackButton>Déconnecter de tous les appareils</BlackButton>
          </Box>
        </StyledBox>
      </Box>
    </>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  padding: 3.2rem 1.6rem 2.4rem 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  width: 39.6rem;
  height: 30rem;
  gap: 11rem;

  ${mediaQuery('md')} {
    width: 32.7rem;
  }
`
const Texte = styled(Text)`
  color: #202124;
  font-family: 'Urbanist';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;

  span {
    color: #d16200;
  }
`
const BlackButton = styled(Button)`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 0.4rem;
  border: 2px solid #202124;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  background: #fdfdfd;
  width: 36.4rem;
`
const IconBox = styled(Box)`
  display: flex;
  padding: 4px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--colors-secondary-500, #0e738a);
  box-shadow: 1px 0px 24px 0px rgba(32, 33, 36, 0.06);
`

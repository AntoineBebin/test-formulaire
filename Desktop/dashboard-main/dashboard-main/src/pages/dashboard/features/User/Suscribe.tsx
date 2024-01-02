import React from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import { useModal } from '../../components/ModalContext'

export const Suscribe = () => {
  const { openModal } = useModal()

  const handleOpenModalSuscribe = () => openModal('Suscribe')

  return (
    <Box>
      <Box flex align="flex-end" justify="space-between">
        <Box flex align="center" justify="center" gap="0.8rem">
          <IconBox>
            <Icon icon="Missing" size={16} />
          </IconBox>
          <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" uppercase>
            Mon abonnement
          </Text>
        </Box>
        <Box flex align="center" justify="center" gap="0.8rem">
          <Text fontSize="1.4rem" weight={700} lineHeight="1.6em" uppercase color="#0E738A">
            Changer de formule
          </Text>
          <Icon icon="Edit" size={16} onClick={handleOpenModalSuscribe} cursorPointer></Icon>
        </Box>
      </Box>
      <StyledBox>
        <Box flex col align="flex-start" gap="24px">
          <Box flex col align="flex-start" gap="16px">
            <ProText fontSize="4rem" weight={700} lineHeight="4rem">
              Offre <span>Pro</span>
            </ProText>
            <Text fontSize="1.2rem" weight={700} lineHeight="1.2rem" uppercase>
              18 utilisateurs
            </Text>
          </Box>
          <Box flex align="flex-start" gap="8px">
            <Box flex padding="8px" col align="flex-start" gap="4px" backgroundColor="#CFE3E8">
              <Text fontSize="1.6rem" weight={700} lineHeight="100%" color="#0E738A">
                Workify
              </Text>
            </Box>
            <Box flex padding="8px" col align="flex-start" gap="4px" backgroundColor="#E5DEF3">
              <Text fontSize="1.6rem" weight={700} lineHeight="100%" color="#7F5CC4">
                Eventify
              </Text>
            </Box>
          </Box>
        </Box>
        <Line />
        <Box flex align="flex-start" gap="16px">
          <Box flex col justify="center" align="flex-start">
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6A6B6D">
              Tarif actuel (Novembre)
            </Text>
            <Box flex gap="4px" align="center">
              <Text fontSize="1.4rem" weight={700} lineHeight="114.286%">
                236.16€ (13.12€/ )
              </Text>
            </Box>
          </Box>
          <Box flex col align="flex-start">
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6A6B6D">
              Prochaine date de facturation
            </Text>
            <Text fontSize="1.4rem" weight={700} lineHeight="114.286%">
              25 Septembre 2023
            </Text>
          </Box>
        </Box>
      </StyledBox>
    </Box>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  height: 30rem;
  align-self: stretch;
  border-radius: 4px;
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const ProText = styled(Text)`
  color: #202124;
  font-family: 'Urbanist';
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  span {
    color: #0e738a;
  }
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
const Line = styled.div`
  height: 1px;
  width: 364px;
  background: var(--colors-secondary-black-50, #d2d3d3);
`

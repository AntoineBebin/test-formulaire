import React from 'react'
import styled from 'styled-components'

import { Box, Text, Button, BlurOverlay } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import { Offer } from '@/pages/misc/routes/Sections/Offer'
import BlueCard from '@/pages/welcome/components/BlueCard'

import { useModal } from '../../components/ModalContext'
import ModalTitle from '../../components/ModalTitle'
export const EditSuscribe = () => {
  const { showModal, modalName, closeModal } = useModal()

  if (!showModal || (showModal && modalName !== 'Suscribe')) {
    return null
  }
  return (
    <BlurOverlay>
      <MarginBox>
        <BlueCard width="120rem">
          <Box flex align="center" justify="flex-start" width="120rem">
            <ModalTitle maxWidth="35rem">
              <IconBox>
                <Icon icon="File" size={32}></Icon>
              </IconBox>
              <Text fontSize="2.4rem" weight={700} lineHeight="3.2rem">
                Mon abonnement
              </Text>
            </ModalTitle>
          </Box>
          <Offer />
          <MarginButton>
            <ButtonText onClick={closeModal}>Annuler</ButtonText>
            <ValidButton>Valider mes informations</ValidButton>
          </MarginButton>
        </BlueCard>
      </MarginBox>
    </BlurOverlay>
  )
}
const MarginButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
  min-width: 112rem;
  margin-bottom: 2rem;
`
const MarginBox = styled(Box)`
  margin-top: 20rem;
  margin-left: 35rem;
`
const IconBox = styled(Box)`
  display: flex;
  padding: 0.8rem;
  align-items: flex-end;
  gap: 0.8rem;
  border-radius: var(--radius-element, 0.4rem);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const ButtonText = styled(Text)`
  color: #6a6b6d;
  font-family: 'Urbanist';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.112rem;
  text-transform: uppercase;
`
const ValidButton = styled(Button)`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 26.8rem;
`

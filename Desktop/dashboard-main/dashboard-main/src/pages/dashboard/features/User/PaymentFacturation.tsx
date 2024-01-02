import React from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import { mediaQuery } from '@/styles/media'

import { useModal } from '../../components/ModalContext'

export const PaymentFacturation = () => {
  const { openModal } = useModal()

  const handleOpenModalPayment = () => openModal('Payment')
  return (
    <>
      <Box flex col>
        <Box flex justify="space-between" align="flex-end" maxWidth="81.6rem">
          <Box flex justify="center" align="center" gap="0.8rem">
            <IconBox>
              <Icon icon="CreditCarde" size={16} />
            </IconBox>
            <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" uppercase>
              Informations de paiement
            </Text>
          </Box>
          <Box
            flex
            justify="center"
            align="center"
            gap="0.8rem"
            media={{
              md: {
                visibility: 'hidden'
              }
            }}
          >
            <Icon icon="Edit" size={16} cursorPointer onClick={handleOpenModalPayment} />
            <Text fontSize="1.4rem" weight={700} lineHeight="1.6em" uppercase color="#0E738A">
              Modifier la facturation & le paiement
            </Text>
          </Box>
        </Box>
        <StyledBox>
          <Box flex align="flex-start" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.8rem" minWidth="55.1rem">
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Nom de la société:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  AMAPII
                </Text>
              </Box>
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Adresse de facturation:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  18 Bis Rue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220
                </Text>
              </Box>
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Numéro de téléphone:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  +33 1 23 45 67 89
                </Text>
              </Box>
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Numéro de TVA:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  Info
                </Text>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="2.4rem">
              <Box flex col align="flex-start">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Moyen de paiement
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  Visa se terminant par 6166
                </Text>
              </Box>
              <Box flex col align="flex-start">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Prochaine date de facturation
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  25 Septembre 2023
                </Text>
              </Box>
            </Box>
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
  align-items: center;
  gap: 2.4rem;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  width: 81.6rem;

  ${mediaQuery('md')} {
    width: 32.7rem;
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

import React from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import { useModal } from '../../components/ModalContext'

// import { EditInformation } from './Modal/EditInformation'

export const Informations = () => {
  const { openModal } = useModal()

  const handleOpenModalAcces = () => openModal('Information')

  return (
    <>
      <Box>
        <Box flex align="flex-start" justify="space-between" minWidth="81.6rem">
          <Box flex align="center" justify="center" gap="0.8rem">
            <IconBox>
              <Icon icon="UserInfo" size={16}></Icon>
            </IconBox>
            <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" uppercase>
              Informations personnelles
            </Text>
          </Box>
          <Box flex align="center" justify="center" gap="0.8rem">
            <Text fontSize="1.4rem" weight={700} lineHeight="1.6em" uppercase color="#0E738A">
              Modifier mes informations
            </Text>
            <Icon icon="Edit" size={16} onClick={handleOpenModalAcces} cursorPointer />
          </Box>
        </Box>
        <StyledBox>
          <Box flex align="flex-start" gap="1.6rem" minWidth="78.4rem">
            <Box minWidth="37rem">
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Nom & prénom:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  Jean-Marc Affionme
                </Text>
              </Box>
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Adresse email:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  j******************e@amapii.com
                </Text>
              </Box>
              <Box flex align="flex-start" gap="0.8rem">
                <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6A6B6D">
                  Numéro de téléphone:
                </Text>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6em">
                  ********70
                </Text>
              </Box>
            </Box>
          </Box>
        </StyledBox>
      </Box>
      {/* {showModal && <EditInformation />} */}
    </>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  padding: 3.2rem 1.6rem 2.4rem 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
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

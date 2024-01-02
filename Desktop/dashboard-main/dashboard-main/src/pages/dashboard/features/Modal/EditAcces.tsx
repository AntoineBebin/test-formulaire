import styled from 'styled-components'

import { Box, Text, Input, Button, BlurOverlay } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import ModalCard from '../../components/ModalCard'
import { useModal } from '../../components/ModalContext'
import ModalTitle from '../../components/ModalTitle'

export const EditAcces = () => {
  const { showModal, modalName, closeModal, openModal } = useModal()

  if (!showModal || (showModal && modalName !== 'Acces')) {
    return null
  }

  return (
    <BlurOverlay>
      <MarginBox>
        <ModalTitle maxWidth="20rem">
          <IconBox>
            <Icon icon="Lock" size={32}></Icon>
          </IconBox>
          <Text fontSize="2.4rem" weight={700} lineHeight="3.2rem">
            Accès
          </Text>
        </ModalTitle>
        <ModalCard maxWidth="55rem" maxHeight="40rem">
          <Box
            flex
            col
            align="flex-start"
            padding="3.5rem 1.5rem 1.5rem 1.5rem"
            gap="2.5rem"
            media={{
              md: {
                col: true,
                align: 'flex-start',
                maxWidth: '27.2rem'
              }
            }}
          >
            <Box flex col align="flex-start" gap="1.5rem">
              <Box flex col align="flex-start" gap="0.25rem">
                <Text fontSize="1.2rem" weight={700} lineHeight="1.6rem" uppercase>
                  Adresse email
                </Text>
                <Box
                  flex
                  padding="0.25rem"
                  align="center"
                  gap="1rem"
                  minWidth="51rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="john.doe.workemail@company.com" rightIcon={<Icon icon="Edit" size={15} />}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.25rem">
                <Text fontSize="1.2rem" weight={700} lineHeight="1.6rem" uppercase>
                  Mot de passe
                </Text>
                <Box
                  flex
                  padding="0.25rem"
                  align="center"
                  gap="1rem"
                  minWidth="51rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="***************" rightIcon={<Icon icon="Edit" size={15} />}></Input>
                </Box>
              </Box>
            </Box>
            <DarkButton>
              <Text fontSize="1.4rem" weight={700} lineHeight="2.4rem" uppercase>
                Ajouter l&apos;authentification en deux étapes
              </Text>
            </DarkButton>
          </Box>
          <ButtonMargin
            flex
            align="center"
            gap="1.5rem"
            minWidth="33rem"
            media={{
              md: {
                col: true
              }
            }}
          >
            <ButtonText
              onClick={closeModal}
              media={{
                md: {
                  order: '2'
                }
              }}
            >
              Annuler
            </ButtonText>
            <ValidButton onClick={() => openModal('Acces2')}>Valider mes informations</ValidButton>
          </ButtonMargin>
        </ModalCard>
      </MarginBox>
    </BlurOverlay>
  )
}
const IconBox = styled(Box)`
  display: flex;
  padding: 0.8rem;
  align-items: flex-end;
  gap: 0.8rem;
  border-radius: var(--radius-element, 0.4rem);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  cursor: pointer;
`
const DarkButton = styled(Button)`
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 2px solid #202124;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  background: rgba(245, 245, 245, 0.7);
  width: 50.4rem;
  margin: auto;
`
const ButtonText = styled(Text)`
  color: #6a6b6d;
  font-family: 'Urbanist';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`
const ValidButton = styled(Button)`
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #202124;
  font-family: 'Urbanist';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
`
const MarginBox = styled(Box)`
  margin-left: 65rem;
  margin-top: 25rem;
`
const ButtonMargin = styled(Box)`
  margin-left: 21rem;
`

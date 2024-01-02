import styled from 'styled-components'

import { Box, Text, Input, Button, BlurOverlay } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import { mediaQuery } from '@/styles/media'

import ModalCard from '../../components/ModalCard'
import { useModal } from '../../components/ModalContext'
import ModalTitle from '../../components/ModalTitle'

export const EditPayment2 = () => {
  const { showModal, modalName, closeModal } = useModal()

  if (!showModal || (showModal && modalName !== 'Payment2')) {
    return null
  }

  return (
    <BlurOverlay>
      <MarginBox>
        <ModalTitle maxWidth="38rem">
          <IconBox>
            <Icon icon="CreditCarde" size={32}></Icon>
          </IconBox>
          <Text fontSize="2.4rem" weight={700} lineHeight="3.2rem">
            Paiement et facturation
          </Text>
        </ModalTitle>
        <ModalCard maxWidth="100rem">
          <Box
            flex
            col
            align="flex-start"
            gap="2.4rem"
            media={{
              md: {
                flex: true,
                col: true,
                align: 'flex-start',
                maxWidth: '27.2rem'
              }
            }}
          >
            <Box flex col align="flex-start" gap="0.5rem">
              <Texte>Mode de paiement</Texte>
              <Box
                flex
                align="flex-start"
                gap="1rem"
                media={{
                  md: {
                    col: true,
                    minWidth: '27.2rem'
                  }
                }}
              >
                <SelectorCard>
                  <Icon icon="CreditCarde" size={16}></Icon>
                  <Text fontSize="1.6rem" weight={600} lineHeight="1rem">
                    Carte bleu
                  </Text>
                </SelectorCard>
                <Selector>
                  <Icon icon="MoneyTransfer" size={16}></Icon>
                  <Text fontSize="1.6rem" weight={400} lineHeight="1rem">
                    Prélevement automatique
                  </Text>
                </Selector>
              </Box>
            </Box>
            <Box flex align="flex-start" gap="2.4rem" wrap="wrap">
              <Box flex col align="flex-start" gap="0.4rem">
                <Texte>Titulaire de la carte</Texte>
                <Box
                  flex
                  padding="0.4rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="30rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="John Doe" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.4rem">
                <Texte>Numéro de carte</Texte>
                <Box
                  flex
                  gap="1.6rem"
                  padding="0.4rem"
                  align="center"
                  minWidth="30rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="1234 5678 9101 1312" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex gap="2.4rem">
                <Box flex col align="flex-start" gap="0.4rem">
                  <Texte>Date d&apos;expiration</Texte>
                  <Box
                    flex
                    padding="0.4rem"
                    align="center"
                    gap="1.6rem"
                    maxWidth="15rem"
                    media={{
                      md: {
                        minWidth: '12.8rem'
                      }
                    }}
                  >
                    <Input placeholder="99 / 99" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                  </Box>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Box flex align="center" gap="1rem">
                    <Texte>CVV</Texte>
                    <Icon icon="InfoFill" size={16}></Icon>
                  </Box>
                  <Box
                    flex
                    padding="0.4rem"
                    align="center"
                    gap="1.6rem"
                    maxWidth="13rem"
                    media={{
                      md: {
                        minWidth: '8rem'
                      }
                    }}
                  >
                    <Input placeholder="999" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                  </Box>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.5rem">
                <Texte>Nom de l&apos;entreprise</Texte>
                <Box
                  flex
                  padding="0.25rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="38rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="Nom de l'entreprise" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.5rem">
                <Texte>Tél. du représentant légal</Texte>
                <Box
                  flex
                  padding="0.25rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="15rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="1 23 45 67 89" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.4rem">
                <Box flex align="center" gap="1rem">
                  <Texte>Numero de TVA</Texte>
                  <Icon icon="InfoFill" size={16}></Icon>
                </Box>
                <Box
                  flex
                  padding="0.4rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="26rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="FR 12345678910" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.4rem">
                <Texte>Adresse du siège social</Texte>
                <Box
                  flex
                  padding="0.4rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="35rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="18 Bis rue du Bicentenaire de la Ré" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.4rem">
                <Texte>Ville</Texte>
                <Box
                  flex
                  padding="0.4rem"
                  align="center"
                  gap="1.6rem"
                  minWidth="35rem"
                  media={{
                    md: {
                      minWidth: '27.2rem'
                    }
                  }}
                >
                  <Input placeholder="Le Plessis-Pâté (91220)" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
                </Box>
              </Box>
              <Box flex col align="flex-start" gap="0.4rem">
                <Texte>Pays</Texte>
                <Field>
                  <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                    France
                  </Text>
                  <Icon icon="ChevronDown" size={24}></Icon>
                </Field>
              </Box>
            </Box>
            <Margin>
              <Box
                flex
                align="center"
                gap="2.4rem"
                minWidth="36.1rem"
                media={{
                  md: {
                    col: true,
                    minWidth: '27.2rem'
                  }
                }}
              >
                <ButtonText
                  onClick={closeModal}
                  media={{
                    md: {
                      order: '2',
                      color: '#D31212'
                    }
                  }}
                >
                  Annuler
                </ButtonText>
                <ValidButton>Valider mes informations</ValidButton>
              </Box>
            </Margin>
          </Box>
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
const Texte = styled(Text)`
  color: #202124;
  font-family: 'Urbanist';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;

  ${mediaQuery('md')} {
    line-height: 1.6rem;
  }
`
const SelectorCard = styled.div`
  display: flex;
  padding: 1.2rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  border: 2px solid #0e738a;
  color: #0e738a;
  background: #fdfdfd;
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
  height: 4rem;

  ${mediaQuery('md')} {
    width: 27.2rem;
  }
`
const Selector = styled.div`
  display: flex;
  padding: 1.2rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
  height: 4rem;

  ${mediaQuery('md')} {
    width: 27.2rem;
  }
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
  cursor: pointer;
`
const ValidButton = styled(Button)`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 26.8rem;
`
const MarginBox = styled(Box)`
  margin-left: 49rem;
  margin-top: 25rem;
`
const Margin = styled(Box)`
  margin-left: 59rem;
`
const Field = styled.div`
  display: flex;
  padding: var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) 1.6rem;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;
  background: var(--colors-secondary-white-50, #fdfdfd);
  width: 20rem;
  height: 4.8rem;
  justify-content: space-between;

  ${mediaQuery('md')} {
    width: 27.2rem;
  }
`

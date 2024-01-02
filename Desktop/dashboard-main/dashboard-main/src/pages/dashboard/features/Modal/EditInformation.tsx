import styled from 'styled-components'

import { Box, Text, Input, Button, BlurOverlay } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import { mediaQuery } from '@/styles/media'

import ModalCard from '../../components/ModalCard'
import { useModal } from '../../components/ModalContext'
import ModalTitle from '../../components/ModalTitle'

export const EditInformation = () => {
  const { showModal, modalName, closeModal } = useModal()

  if (!showModal || (showModal && modalName !== 'Information')) {
    return null
  }

  return (
    <BlurOverlay>
      <MarginBox>
        <ModalTitle>
          <IconBox>
            <Icon icon="UserInfo" size={32}></Icon>
          </IconBox>
          <Text fontSize="2.4rem" weight={700} lineHeight="3.2rem">
            Informations personnelles
          </Text>
        </ModalTitle>
        <ModalCard>
          <Box
            flex
            align="flex-start"
            gap="2.4rem"
            wrap="wrap"
            maxWidth="93.6rem"
            media={{
              md: {
                flex: true,
                col: true,
                maxWidth: '27.2rem'
              }
            }}
          >
            <Box flex minWidth="20rem" col align="flex-start" gap="0.4rem">
              <Texte>Nom du représentant légal</Texte>
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
                <Input placeholder="Doe" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex minWidth="20rem" col align="flex-start" gap="0.4rem">
              <Texte>Prénom du représentant légal</Texte>
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
                <Input placeholder="John" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box
              flex
              col
              align="flex-start"
              gap="0.4rem"
              minWidth="20rem"
              media={{
                md: {
                  minWidth: '27.2rem'
                }
              }}
            >
              <Box flex align="center" gap="1rem">
                <Texte>Statut de l&apos;entreprise</Texte>
                <Icon icon="InfoFill" size={16}></Icon>
              </Box>
              <Box flex padding="0.4rem" align="center" gap="1.6rem">
                <Field>
                  <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                    Entreprise SARL
                  </Text>
                  <IconBox>
                    <Icon icon="ChevronDown" size={24}></Icon>
                  </IconBox>
                </Field>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem" minWidth="40rem">
              <Texte>Adresse email du représentant légal</Texte>
              <Box
                flex
                align="center"
                gap="1.6rem"
                padding="0.4rem"
                minWidth="65.1rem"
                media={{
                  md: {
                    minWidth: '27.2rem'
                  }
                }}
              >
                <Input placeholder="Email" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem" minWidth="21.3rem">
              <Texte>Tél. du représentant légal</Texte>
              <Box flex padding="0.4rem" align="center" gap="1.6rem">
                <Field>
                  <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                    1 23 45 67 89
                  </Text>
                  <IconBox>
                    <Icon icon="Close" size={24}></Icon>
                  </IconBox>
                </Field>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Texte>Nom de l&apos;entreprise</Texte>
              <Box
                flex
                padding="0.4rem"
                align="center"
                gap="1.6rem"
                minWidth="40rem"
                media={{
                  md: {
                    minWidth: '27.2rem'
                  }
                }}
              >
                <Input placeholder="Nom de l'entreprise" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Box flex align="center" gap="1rem">
                <Texte>Numéro de SIRET</Texte>
                <Icon icon="InfoFill" size={16}></Icon>
              </Box>
              <Box
                flex
                padding="0.4rem"
                align="center"
                gap="1.6rem"
                maxWidth="20rem"
                media={{
                  md: {
                    minWidth: '27.2rem'
                  }
                }}
              >
                <Input placeholder="123456789101112" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Box flex align="center" gap="1rem">
                <Texte>Immatriculation RCS</Texte>
                <Icon icon="InfoFill" size={16}></Icon>
              </Box>
              <Box
                flex
                padding="0.4rem"
                align="center"
                gap="1.6rem"
                maxWidth="24rem"
                media={{
                  md: {
                    minWidth: '27.2rem'
                  }
                }}
              >
                <Input placeholder="RCS Paris B 516403572" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Texte>Adresse du siège social</Texte>
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
                <Input placeholder="18 Bis Rue du Bicentenaire de la Révolution" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Texte>Ville</Texte>
              <Box
                flex
                align="center"
                padding="0.4rem"
                gap="1.6rem"
                minWidth="32rem"
                media={{
                  md: {
                    minWidth: '27.2rem'
                  }
                }}
              >
                <Input placeholder="Le Plessis-Paté (91220)" rightIcon={<Icon icon="Close" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem">
              <Texte>Pays</Texte>
              <Box flex padding="0.4rem" align="center" gap="1.6rem">
                <Field>
                  <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                    France
                  </Text>
                  <IconBox>
                    <Icon icon="ChevronDown" size={24}></Icon>
                  </IconBox>
                </Field>
              </Box>
            </Box>
          </Box>
          <MarginButton>
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
                    order: '2'
                  }
                }}
              >
                Annuler
              </ButtonText>
              <ValidButton>Valider mes informations</ValidButton>
            </Box>
          </MarginButton>
        </ModalCard>
      </MarginBox>
    </BlurOverlay>
  )
}
const Texte = styled(Text)`
  color: #202124;
  font-family: 'Urbanist';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.048rem;
  text-transform: uppercase;
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
const Field = styled.div`
  width: 20rem;
  height: 4.8rem;
  background: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  margin-top: 22rem;
`
const MarginButton = styled(Box)`
  margin-left: 49rem;
`

import styled from 'styled-components'

import { Box, Text, Input } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const AdminSupport = () => {
  return (
    <Box flex align="flex-start" minWidth="112.8rem">
      <StyledBox>
        <Box flex col align="flex-start" gap="2.4rem">
          <Text fontSize="3.2rem" weight={600} lineHeight="4em">
            Support technique
          </Text>
          <Box flex align="flex-start" gap="2.4rem" wrap="wrap">
            <Box flex minWidth="26.9rem" col align="flex-start" gap="0.4rem">
              <Text fontSize="1.2rem" weight={600} lineHeight="1.6em" uppercase>
                Recherche d&apos;abonné
              </Text>
              <Box flex padding="1.2rem 1.6rem" align="center" minWidth="50rem">
                <Input placeholder="Nom d'entreprise, de client, type d'abonnement"></Input>
                <Box flex padding="1.2rem" align="flex-start">
                  <Icon icon="Search" size={24}></Icon>
                </Box>
              </Box>
            </Box>
            <Box flex col align="flex-start" gap="0.4rem" minWidth="20rem">
              <Text fontSize="1.2rem" weight={600} lineHeight="1.6em" uppercase>
                Trier par
              </Text>
              <Field>
                <FieldText>Choisir un critère</FieldText>
                <Icon icon="ChevronDown" size={24}></Icon>
              </Field>
            </Box>
          </Box>
        </Box>
        <SupportBox>
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                AMAPII - Abonnement Pro+
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#368a9e">
              <Icon icon="Bug" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#0e738a" uppercase>
                Rapport de bug
              </Text>
            </Box>
          </Box>
          <Line />
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                Lycaris - Abonnement Pro
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#F3DCCD">
              <Icon icon="Settings" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#D16200" uppercase>
                Assistance technique
              </Text>
            </Box>
          </Box>
          <Line />
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                Ratus - Abonnement Free
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#F3DCDC">
              <Icon icon="Warning" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#D31212" uppercase>
                Rupture de service
              </Text>
            </Box>
          </Box>
          <Line />
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                AMAPII - Abonnement Pro+
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#E5DEF3">
              <Icon icon="Briefcase" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#7F5CC4" uppercase>
                Administratif & financier
              </Text>
            </Box>
          </Box>
          <Line />
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                AMAPII - Abonnement Pro+
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#368a9e">
              <Icon icon="Bug" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#0e738a" uppercase>
                Rapport de bug
              </Text>
            </Box>
          </Box>
          <Line />
          <Box flex align="center" gap="1.6rem" minWidth="78.4rem">
            <Box flex col align="flex-start" gap="0.4rem" minWidth="62.5rem">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#368a9e">
                AMAPII - Abonnement Pro+
              </Text>
              <Text fontSize="1.6rem" weight={600} lineHeight="1.6em" color="#202124">
                Quand je clique sur les boutons ça marche paaaaaaaaaaaaaaas
              </Text>
              <Text fontSize="1.2rem" weight={500} lineHeight="1.2em" color="#d16200">
                Requête en cours de traitement
              </Text>
            </Box>
            <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#368a9e">
              <Icon icon="Bug" size={16}></Icon>
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" color="#0e738a" uppercase>
                Rapport de bug
              </Text>
            </Box>
          </Box>
          <Box flex align="center" gap="0.4rem">
            <Icon icon="ChevronLeft" size={24}></Icon>
            <Box flex align="center" gap="0.8rem">
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                1
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em">
                <strong>2</strong>
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                3
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                4
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                5
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                6
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                ...
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                19
              </Text>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4em" color="#b5b5b6">
                20
              </Text>
            </Box>
            <Icon icon="ChevronRight" size={24}></Icon>
          </Box>
        </SupportBox>
      </StyledBox>
    </Box>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 2.4rem 2.4rem 2.4rem 19.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  flex: 1 0 0;
  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  width: 103.2rem;
`
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  align-items: center;
  flex: 1 0 0;
  background: #fcfcfc;
  width: 29.6rem;
  height: 4.8rem;
`
const FieldText = styled(Text)`
  overflow: hidden;
  color: #b7b7b7;
  text-overflow: ellipsis;
  font-family: 'Urbanist';
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  line-height: 2.4rem;
`
const SupportBox = styled(Box)`
  display: flex;
  height: 56.2rem;
  padding: 2.4rem 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fcfcfc;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  max-width: 81.6rem;
`
const Line = styled.div`
  height: 0.1rem;
  align-self: stretch;
  background: #e6e6e6;
  width: 78.4rem;
`

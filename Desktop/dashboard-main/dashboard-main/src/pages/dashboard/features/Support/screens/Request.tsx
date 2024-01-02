import styled from 'styled-components'

import { Box, Text, Button, Input } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import BlueCard from '@/pages/welcome/components/BlueCard'
import { mediaQuery } from '@/styles/media'

import Layout from '../components/Layout'

export const Request = () => {
  return (
    <Layout>
      <BlueCard>
        <StyledBox>
          <ReturnDiv>
            <Icon icon="ChevronLeft" size={16}></Icon>
            <Text fontSize="1.6rem" lineHeight="2em" uppercase weight={700} color="#0E738A">
              Retour
            </Text>
          </ReturnDiv>
          <Text
            fontSize="3.2rem"
            weight={600}
            lineHeight="4rem"
            media={{
              md: {
                fontSize: '2.4rem',
                lineHeight: '3.6rem'
              }
            }}
          >
            Suivi des requêtes
          </Text>
          <Box
            flex
            align="flex-end"
            gap="2.4rem"
            media={{
              md: {
                col: true,
                align: 'center'
              }
            }}
          >
            <Box flex col align="flex-start">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" uppercase>
                Trouver une requête
              </Text>
              <Box
                flex
                padding="0.4rem"
                align="center"
                gap="1.6rem"
                minWidth="57.3rem"
                media={{
                  md: {
                    minWidth: '32rem'
                  }
                }}
              >
                <Input placeholder="Motif de la requête" rightIcon={<Icon icon="Search" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Box flex col align="flex-start">
              <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" uppercase>
                Trier par
              </Text>
              <Box
                flex
                padding="0.4rem"
                align="center"
                gap="1.6rem"
                minWidth="28rem"
                media={{
                  md: {
                    minWidth: '32rem'
                  }
                }}
              >
                <Input placeholder="Choisir un critère" rightIcon={<Icon icon="ChevronDown" size={24}></Icon>}></Input>
              </Box>
            </Box>
            <Button>Créer un ticket</Button>
          </Box>
          <Box flex justify="center" align="center" gap="0.8rem">
            <Text fontSize="1.6rem" lineHeight="2em" uppercase weight={700} color="#0E738A">
              Requêtes en cours de traitement
            </Text>
            <Line />
          </Box>
          <MarginBox>
            <Box
              flex
              align="flex-start"
              gap="2.4rem"
              wrap="wrap"
              media={{
                md: {
                  col: true
                }
              }}
            >
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#F6E0CC">
                  <Icon icon="Settings" size={16}></Icon>
                  <Text fontSize="1.2rem" weight={700} uppercase lineHeight="1.6em" color="#D16200">
                    Assistance technique
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#E5DEF3">
                  <Icon icon="Briefcase" size={16}></Icon>
                  #E5DEF3
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#F6D0D0">
                  <Icon icon="Warning" size={16}></Icon>
                  <Text fontSize="1.2rem" weight={700} lineHeight="1.6em" uppercase color="#D31212">
                    Rupture de service
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                    Requête en cours de traitement
                  </Text>
                </Box>
              </RequestBox>
            </Box>
          </MarginBox>
          <Box flex justify="center" align="center" gap="0.8rem">
            <Text fontSize="1.6rem" lineHeight="2em" uppercase weight={700} color="#0E738A">
              Requêtes en cours de traitement
            </Text>
            <SecondLine />
          </Box>
          <MarginBox>
            <Box flex align="flex-start" gap="2.4rem" wrap="wrap">
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#44893E">
                    Archivé le <strong>1 Juin 2023</strong>
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#44893E">
                    Archivé le <strong>1 Juin 2023</strong>
                  </Text>
                </Box>
              </RequestBox>
              <RequestBox>
                <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#CFE3E8">
                  <Icon icon="Bug" size={16}></Icon>
                  <Text fontSize="1.2rem" lineHeight="1.6em" uppercase weight={700} color="#0E738A">
                    Rapport de bug
                  </Text>
                </Box>
                <Box flex col align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="2rem">
                    Demande de remboursement pour double prélèvement
                  </Text>
                  <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#44893E">
                    Archivé le <strong>1 Juin 2023</strong>
                  </Text>
                </Box>
              </RequestBox>
            </Box>
          </MarginBox>
        </StyledBox>
      </BlueCard>
    </Layout>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  width: 112.8rem;

  ${mediaQuery('md')} {
    width: 37.5rem;
  }
`
const MarginBox = styled(Box)`
  margin-top: -5rem;
`
const Line = styled.div`
  border-radius: 0.2rem;
  background: #afd0d8;
  height: 0.2rem;
  flex: 1 0 0;
  width: 74.8rem;
`
const SecondLine = styled.div`
  border-radius: 0.2rem;
  background: #afd0d8;
  height: 0.2rem;
  flex: 1 0 0;
  width: 89.5rem;
`
const RequestBox = styled(Box)`
  display: flex;
  min-width: 26.4rem;
  max-width: 40rem;
  padding: var(--radius-container, 0.8rem) var(--radius-container, 0.8rem) 1.6rem var(--radius-container, 0.8rem);
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  flex: 1 0 0;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const ReturnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  z-index: 1;
`

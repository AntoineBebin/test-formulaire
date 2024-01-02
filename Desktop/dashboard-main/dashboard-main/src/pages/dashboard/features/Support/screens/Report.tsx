import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import BlueCard from '@/pages/welcome/components/BlueCard'
import { mediaQuery } from '@/styles/media'

import Layout from '../components/Layout'

export const Report = () => {
  return (
    <Layout>
      <BlueCard>
        <StyledBox>
          <ReturnDiv>
            <Icon icon="ChevronLeft" size={16}></Icon>
            <Text fontSize="1.4rem" weight={700} lineHeight="1.6rem" color="#0e738a" uppercase>
              Retour
            </Text>
          </ReturnDiv>
          <Box>
            <Text
              fontSize="3.2rem"
              weight={600}
              lineHeight="4rem"
              media={{
                md: {
                  fontSize: '2.4rem'
                }
              }}
            >
              Une question, un problème ?
            </Text>
          </Box>
          <Box
            flex
            align="flex-end"
            justify="flex-end"
            gap="2.4rem"
            media={{
              md: {
                align: 'center'
              }
            }}
          >
            <Box
              flex
              col
              align="flex-start"
              gap="0.4rem"
              media={{
                md: {
                  width: '32rem'
                }
              }}
            >
              <Text uppercase fontSize="1.2rem" weight={700} lineHeight="1.6rem">
                Catégorie de requête
              </Text>
              <Box flex padding="0.4rem" gap="1.6rem" align="center" minWidth="62.4rem">
                <Field>
                  <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                    Rapport de bug
                  </Text>
                  <Icon icon="ChevronDown" size={24}></Icon>
                </Field>
              </Box>
            </Box>
            <BoxAttachment>
              <Icon icon="AddAttachment" size={24}></Icon>
            </BoxAttachment>
          </Box>
          <Box
            flex
            col
            align="flex-start"
            gap="0.4rem"
            media={{
              md: {
                width: '32rem'
              }
            }}
          >
            <Text uppercase fontSize="1.2rem" weight={700} lineHeight="1.6rem">
              Motif de la requête
            </Text>
            <Box flex padding="0.4rem" align="center" gap="1.6rem">
              <SecondField>
                <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                  Motif de la requête qui peut prendre une certaine place jusqu’à une certaine
                </Text>
                <Icon icon="Close" size={24}></Icon>
              </SecondField>
            </Box>
          </Box>
          <Box flex col align="flex-start" gap="0.4rem">
            <Text uppercase fontSize="1.2rem" weight={700} lineHeight="1.6rem">
              Message
            </Text>
            <ContainerBox>
              <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
                Message qui concerne une entreprise et prend une certain place vous voyez Lorem ipsum dolor sit amet, omnis homero noster
                usu cu, has at quaestio oportere. Eum justo placerat signiferumque ad. Solet vocent dissentiet et quo, ex his postea
                mnesarchum. Est no aperiri maiorum adipisci. Sit solum voluptua omittantur ad. Eu errem quodsi vel. Erat fastidii
                voluptatibus et pri, in agam adhuc honestatis mei.
              </Text>
              <MarginBox>
                <Box
                  flex
                  align="flex-start"
                  gap="0.8rem"
                  media={{
                    md: {
                      col: true
                    }
                  }}
                >
                  <Box flex align="flex-start" gap="0.8rem">
                    <IconBox>
                      <Icon icon="File" size={24}></Icon>
                      <Box flex col align="flex-start">
                        <Text fontSize="1.2rem" weight={600} lineHeight="1.2rem">
                          Réglementation officielle
                        </Text>
                        <Text fontSize="1rem" weight={600} lineHeight="100%" color="#6a6b6d">
                          486Ko
                        </Text>
                      </Box>
                      <Icon icon="Delete" size={24}></Icon>
                    </IconBox>
                  </Box>
                  <Box flex align="flex-start" gap="0.8rem">
                    <IconBox>
                      <Icon icon="File" size={24}></Icon>
                      <Box flex col align="flex-start">
                        <Text fontSize="1.2rem" weight={600} lineHeight="1.2rem">
                          Contrat numéro 25949849.pdf
                        </Text>
                        <Text fontSize="1rem" weight={600} lineHeight="100%" color="#6a6b6d">
                          486Ko
                        </Text>
                      </Box>
                      <Icon icon="Delete" size={24}></Icon>
                    </IconBox>
                  </Box>
                </Box>
              </MarginBox>
            </ContainerBox>
          </Box>
          <Box
            flex
            justify="flex-end"
            align="center"
            gap="2.4rem"
            minWidth="69.6rem"
            media={{
              md: {
                col: true,
                align: 'center'
              }
            }}
          >
            <Text
              color="#6a6b6d"
              fontSize="1.4rem"
              weight={700}
              lineHeight="1.6rem"
              uppercase
              media={{
                md: {
                  order: '2',
                  color: '#D31212'
                }
              }}
            >
              Annuler
            </Text>
            <Button>Valider mes informations</Button>
          </Box>
        </StyledBox>
      </BlueCard>
    </Layout>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 5.6rem 2.4rem 2.4rem 2.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);

  ${mediaQuery('md')} {
    display: flex;
    padding: 5.6rem 2.7rem 3.2rem 2.8rem;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    align-self: stretch;
    background: rgba(245, 245, 245, 0.5);
    box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(8px);
    min-width: 37.5rem;
  }
`
const Field = styled(Box)`
  background: #fdfdfd;
  display: flex;
  padding: var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) 1.6rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  align-self: stretch;
  width: 62.4rem;
  height: 4.8rem;

  ${mediaQuery('md')} {
    width: 32rem;
  }
`
const SecondField = styled.div`
  display: flex;
  height: 4.8rem;
  padding: var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) var(--radius-element, 0.4rem) 1.6rem;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;
  border-radius: var(--radius-element, 0.4rem);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  width: 69.6rem;
  justify-content: space-between;

  ${mediaQuery('md')} {
    width: 32rem;
    overflow: hidden;
  }
`
const BoxAttachment = styled(Box)`
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  border: 2px solid #202124;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.6rem 8.8rem 1.6rem;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fdfdfd;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  width: 69.6rem;
  height: 22rem;

  ${mediaQuery('md')} {
    width: 37.2rem;
  }
`
const IconBox = styled(Box)`
  display: flex;
  padding: 0.4rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid #afd0d8;
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const MarginBox = styled.div`
  margin-left: -21rem;
  margin-top: 1rem;
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

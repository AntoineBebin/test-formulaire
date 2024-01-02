import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'
import BlueCard from '@/pages/welcome/components/BlueCard'
import { mediaQuery } from '@/styles/media'

import Layout from '../components/Layout'

export const RequestFollow = () => {
  return (
    <Layout>
      <BlueCard>
        <StyledBox>
          <ReturnDiv>
            <Icon icon="ChevronLeft" size={16}></Icon>
            <Text fontSize="1.4rem" weight={700} lineHeight="1.6em" uppercase color="#0E738A">
              Retour
            </Text>
          </ReturnDiv>
          <AlignText>
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
              Suivi de votre requête
            </Text>
          </AlignText>
          <Box flex padding="1.6rem" align="flex-start" gap="6.4rem" backgroundColor="#fdfdfd">
            <Box flex align="flex-start" gap="1.6rem">
              <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor="#F6D0D0">
                <Icon icon="Warning" size={32}></Icon>
                <Text
                  fontSize="2rem"
                  weight={600}
                  lineHeight="2.4em"
                  color="#D31212"
                  media={{
                    xxl: {
                      visibility: 'hidden'
                    },
                    md: {
                      visibility: 'visible'
                    }
                  }}
                >
                  Rupture de service
                </Text>
              </Box>
              <Box
                flex
                col
                align="flex-start"
                media={{
                  md: {
                    col: false
                  }
                }}
              >
                <Text
                  fontSize="1.6rem"
                  weight={700}
                  lineHeight="2.4em"
                  color="#D16200"
                  media={{
                    md: {
                      align: 'center'
                    }
                  }}
                >
                  Requête en cours de traitement
                </Text>
                <TextOverflow>
                  Motif de la requête qui peut prendre une certaine place jusqu’à une certaine limite quoi même faut pas forcer
                </TextOverflow>
              </Box>
              <YellowBox>
                <Icon icon="Send" size={24}></Icon>
              </YellowBox>
            </Box>
          </Box>
          <Box
            flex
            align="flex-start"
            gap="2.4rem"
            media={{
              md: {
                col: true,
                align: 'center'
              }
            }}
          >
            <Box flex col align="flex-start" gap="0.4rem">
              <Box flex align="flex-start" gap="0.4rem">
                <Icon icon="Box" size={16}></Icon>
                <Text fontSize="1.4rem" weight={700} lineHeight="1.6rem">
                  Historique des échanges
                </Text>
              </Box>
              <Box flex padding="1.6rem" col align="flex-start" gap="2.4rem" backgroundColor="#fdfdfd">
                {/* <ScrollBar /> */}
                <Box flex minWidth="32.8rem" col padding="0.8rem" align="flex-start" gap="0.4rem">
                  <Box flex align="flex-start" gap="0.4rem">
                    <Icon icon="MailUnread" size={12}></Icon>
                    <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#0E738A">
                      Dev Lead - C’ DéjàVu
                    </Text>
                    <Line />
                    <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#6A6B6D">
                      2 Juin 2023
                    </Text>
                    <Line />
                    <Icon icon="Box" size={12}></Icon>
                  </Box>
                  <Box>
                    <Text fontSize="1.6rem" weight={600} lineHeight="1.6rem">
                      Nous avons pris connaissance de votre req
                    </Text>
                  </Box>
                </Box>
                <SecondLine />
                <Box flex minWidth="32.8rem" col padding="0.8rem" align="flex-start" gap="0.4rem">
                  <Box flex align="flex-start" gap="0.4rem">
                    <Icon icon="MailRead" size={12}></Icon>
                    <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#0E738A">
                      Dev Lead - C’ DéjàVu
                    </Text>
                    <Line />
                    <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#6A6B6D">
                      2 Juin 2023
                    </Text>
                    <Line />
                  </Box>
                  <Box>
                    <Text fontSize="1.6rem" weight={600} lineHeight="1.6rem">
                      Nous avons pris connaissance de votre req
                    </Text>
                  </Box>
                </Box>
                <SecondLine />
                <Box flex minWidth="32.8rem" col padding="0.8rem" align="flex-start" gap="0.4rem">
                  <Box flex align="flex-start" gap="0.4rem">
                    <Icon icon="MailRead" size={12}></Icon>
                    <Text fontSize="1.2rem" weight={700} lineHeight="1.2em" color="#0E738A">
                      Dev Lead - C’ DéjàVu
                    </Text>
                    <Line />
                    <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#6A6B6D">
                      2 Juin 2023
                    </Text>
                    <Line />
                  </Box>
                  <Box>
                    <Text fontSize="1.6rem" weight={600} lineHeight="1.6rem">
                      Nous avons pris connaissance de votre req
                    </Text>
                  </Box>
                </Box>
                <SecondLine />
              </Box>
            </Box>
            <Box flex col padding="1.6rem" align="flex-start" backgroundColor="#fdfdfd" minHeight="32.8rem">
              <Box
                flex
                col
                align="flex-start"
                gap="1.6rem"
                media={{
                  md: {
                    col: true,
                    align: 'flex-end',
                    gap: '2.4rem'
                  }
                }}
              >
                <Text fontSize="2rem" weight={700} lineHeight="2.4rem">
                  Nous avons pris connaissance de trucs à blablalbalblablablablabla
                </Text>
              </Box>
              <Text fontSize="1.6rem" weight={400} lineHeight="2rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus sed nisi tempor lacinia id in ipsum. Nam
                elementum aliquam lacinia. Curabitur finibus sapien nisi, eget dignissim dui lacinia consectetur. Sed quis luctus ante.
                Vestibulum egestas ligula tortor, at convallis velit scelerisque ut. In tortor massa, tincidunt eget hendrerit ac, tristique
                vitae elit. Donec eu elit justo. Donec aliquam lectus in pretium facilisis. Etiam pellentesque bibendum nibh, a convallis
                dui luctus nec. Proin gravida ultricies elit a dignissim. Suspendisse potenti.
              </Text>
            </Box>
          </Box>
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
  gap: 3.2rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);

  ${mediaQuery('md')} {
    width: 32rem;
    align-items: center;
    margin-left: 12rem;
  }
`
const AlignText = styled.div`
  text-align: center;
  width: 108rem;
  display: flex;
  justify-content: center;
`
const TextOverflow = styled(Text)`
  overflow: hidden;
  color: #202124;
  text-overflow: ellipsis;
  font-family: 'Urbanist';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: 0.08rem;
`
const YellowBox = styled(Box)`
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  background: #ffd966;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Line = styled.div`
  width: 0.1rem;
  align-self: stretch;
  background: var(--colors-secondary-black-50, #d2d3d3);
  height: 1.2rem;
`
const SecondLine = styled.div`
  height: 0.1rem;
  align-self: stretch;
  background: var(--colors-secondary-black-50, #d2d3d3);
  width: 24.8rem;
`
// const ScrollBar = styled.div`
//   display: flex;
//   height: 25.076rem;
//   padding: 0.1rem;
//   align-items: flex-start;
//   gap: 0.8rem;
//   position: absolute;
//   right: 75rem;
//   bottom: 5rem;
//   border-radius: 0.4rem;
//   background: #d2d3d3;
// `
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

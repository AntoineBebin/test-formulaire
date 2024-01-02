import styled from 'styled-components'

import { Box, Text, Input } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const SuscriberManagement = () => {
  const suscribeData = [
    {
      name: 'AMAPII',
      number: '18 Utilisateurs',
      offer: 'Pro+'
    }
  ]
  const reapeatData = Array(8).fill(suscribeData).flat()

  return (
    <StyledBox>
      <Box flex col align="flex-start" gap="24px">
        <Box flex align="center" gap="24px">
          <Title>
            <span>G</span>estion des abonnés
          </Title>
          <Line />
        </Box>
        <Box flex align="flex-end" gap="24px">
          <Box flex col align="flex-start" gap="4px">
            <Text fontSize="1.2rem" weight={700} lineHeight="100%" uppercase>
              Recherche d&apos;abonné
            </Text>
            <Box flex align="center" gap="16px" width="512px">
              <Input
                rightIcon={<Icon icon="Search" size={16} />}
                placeholder="Motif de la requête, catégorie, état de résolution, messages..."
                type="text"
              />
            </Box>
          </Box>
          <Box flex col align="flex-start" gap="4px" width="280px">
            <Text fontSize="1.2rem" weight={700} lineHeight="100%" uppercase>
              Trier par
            </Text>
            <Box flex align="center" gap="16px" width="280px">
              <Input rightIcon={<Icon icon="ChevronDown" size={16} />} placeholder="Choisir un critère" type="text" />
            </Box>
          </Box>
        </Box>
        <SuscribeBox>
          {reapeatData.map((data, index) => (
            <a key={index} href="dashboard-admin">
              <Box flex col align="flex-start" gap="15.5px">
                <Box flex justify="space-between" align="center" width="784px">
                  <Box flex col align="flex-start">
                    <Text fontSize="1.6rem" weight={700} lineHeight="125%">
                      {data.name}
                    </Text>
                    <Text fontSize="1.2rem" weight={400} lineHeight="100%" color="#6a6b6d">
                      {data.number}
                    </Text>
                  </Box>
                  <Box flex padding="8px 10px 8px 8px" align="center" gap="8px" backgroundColor="#E5DEF3">
                    <Text fontSize="1.2rem" weight={700} lineHeight="133.333%" uppercase color="#7F5CC4">
                      {data.offer}
                    </Text>
                  </Box>
                </Box>
                <SecondLine />
              </Box>
            </a>
          ))}
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
        </SuscribeBox>
      </Box>
    </StyledBox>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  width: 1032px;
  padding: 2.4rem 2.4rem 2.4rem 19.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  flex: 1 0 0;
  border-radius: var(--radius-container, 0.8rem);
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  margin-left: 50rem;
`
const Title = styled.h1`
  color: var(--global-text-title-regular-accent-alternate, var(--colors-secondary-500, #202124));
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;

  span {
    color: #0e738a;
  }
`
const SuscribeBox = styled(Box)`
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
  width: 81.6rem;
`
const Line = styled.div`
  height: 1px;
  width: 345px;
  flex: 1 0 0;
  background: var(--colors-secondary-black-50, #d2d3d3);
`
const SecondLine = styled.div`
  height: 1px;
  width: 784px;
  align-self: stretch;
  background: #e6e6e6;
`

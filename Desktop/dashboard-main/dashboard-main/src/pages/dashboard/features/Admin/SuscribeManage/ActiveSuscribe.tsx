import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const ActiveSuscribe = () => {
  return (
    <Box flex col align="flex-start" gap="0.4rem" height="171px">
      <Box flex align="flex-start" gap="0.4rem">
        <Icon icon="File" size={16}></Icon>
        <Text uppercase fontSize="1.2rem" weight={600} lineHeight="1.6em">
          Abonnement actif
        </Text>
      </Box>
      <StyledBox>
        <Box flex col align="flex-start" gap="0.4rem">
          <Texte fontSize="3.2rem" weight={700} lineHeight="4em">
            Formule <span>Pro+</span>
          </Texte>
          <Text uppercase fontSize="1.2rem" weight={800} lineHeight="1.2em" color="#b7b7b7">
            18 Utilisateurs
          </Text>
        </Box>
      </StyledBox>
    </Box>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  width: 264px;
  padding: 3.2rem 1.6rem 2.4rem 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  flex: 1 0 0;
  border-radius: 0.4rem;
  background: #fcfcfc;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  justify-content: center;
`
const Texte = styled(Text)`
  font-family: 'Urbanist';
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4rem;

  span {
    color: #7f5cc4;
  }
`

import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const SuscribeAcces = () => {
  return (
    <Box flex col align="flex-start" gap="4px">
      <Box flex align="flex-start" gap="4px">
        <Icon icon="Lock" size={16} />
        <Text uppercase fontSize="1.2rem" weight={600} lineHeight="133.333%">
          Accès
        </Text>
      </Box>
      <StyledBox>
        <Box flex align="flex-start" gap="8px">
          <Box width="144px">
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6c6d70">
              Adresse email :
            </Text>
          </Box>
          <Text fontSize="1.2rem" weight={600} lineHeight="133.333%">
            j******************e@a****i.com
          </Text>
        </Box>
        <Box flex align="flex-start" gap="8px">
          <Box width="144px">
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6c6d70">
              Authentification sécurisée :
            </Text>
          </Box>
          <Text fontSize="1.2rem" weight={600} lineHeight="133.333%" color="#44893e">
            Activé
          </Text>
        </Box>
        <Box flex align="flex-start" gap="8px">
          <Box width="144px">
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6c6d70">
              Type d’authentification :
            </Text>
          </Box>
          <Box flex align="flex-start" gap="4px">
            <Text fontSize="1.2rem" weight={600} lineHeight="133.333%">
              SMS
            </Text>
            <Text fontSize="1.2rem" weight={400} lineHeight="133.333%">
              (numéro se terminant par 91)
            </Text>
          </Box>
        </Box>
      </StyledBox>
    </Box>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 32px 16px 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 4px;
  background: var(--colors-secondary-white-100, #fcfcfc);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`

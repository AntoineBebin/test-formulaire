import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const SupportSuscribe = () => {
  const supportData = [
    {
      icon: <Icon icon="Bug" size={16} />,
      label: 'Création d’un module de traitement des informations liées à quelque chose de très particulier mais je sais pas trop',
      advancement: 'Requête en cours de traitement'
    },
    {
      icon: <Icon icon="Settings" size={16} />,
      label: 'Ajout d’une fonctionnalité',
      advancement: 'Requête en cours de traitement'
    },
    {
      icon: <Icon icon="Briefcase" size={16} />,
      label: 'Negociation du tarif réglementé',
      advancement: 'Archivé le 1 Juin 2023'
    }
  ]
  const colors = ['#CFE3E8', '#F6E0CC', '#E5DEF3']

  return (
    <Box flex col align="flex-start" gap="4px">
      <Box flex justify="space-between" align="center" width="816px">
        <Box flex align="flex-start" gap="4px">
          <Icon icon="Hotline" size={16} />
          <Text uppercase fontSize="1.2rem" weight={600} lineHeight="133.333%">
            Support technique
          </Text>
        </Box>
        <Box flex align="center" gap="4px">
          <Text fontSize="1.2rem" weight={600} lineHeight="133.333%" color="#368A9E" uppercase>
            Voir toutes les requêtes
          </Text>
          <Icon icon="ChevronRight" size={16} />
        </Box>
      </Box>
      <StyledBox>
        {supportData.map((data, index) => (
          <Box key={index}>
            <Box flex align="flex-start" gap="8px" width="784px">
              <Box flex padding="8px" align="center" gap="4px" backgroundColor={colors[index % colors.length]}>
                {data.icon}
              </Box>
              <Box flex col align="flex-start" gap="4px">
                <Text fontSize="1.6rem" weight={600} lineHeight="100%" nowrap>
                  {data.label}
                </Text>
                <Text fontSize="1.2rem" weight={500} lineHeight="100%">
                  {data.advancement}
                </Text>
              </Box>
            </Box>
            <Line />
          </Box>
        ))}
      </StyledBox>
    </Box>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  padding: 32px 16px 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  border-radius: 4px;
  background: var(--colors-secondary-white-100, #fcfcfc);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Line = styled.div`
  height: 1px;
  width: 784px;
  align-self: stretch;
  background: #e6e6e6;
  margin-top: 8px;
`

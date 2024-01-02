import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const Facturation = () => {
  const facturationData = [
    {
      label: 'Nom de la société: ',
      value: 'AMAPII'
    },
    {
      label: 'Adresse de facturation: ',
      value: '18 Bis Rue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220'
    },
    {
      label: 'Numéro de téléphone: ',
      value: '+33 1 23 45 67 89'
    },
    {
      label: 'Numéro de TVA: ',
      value: 'Info'
    }
  ]
  const additionnalData = [
    {
      label: 'Moyen de paiement',
      value: 'Visa se terminant par 6166'
    },
    {
      label: 'Prochaine date de facturation',
      value: '25 Septembre 2023'
    }
  ]

  return (
    <Box flex col align="flex-start" gap="4px">
      <Box flex align="flex-start" gap="4px">
        <Icon icon="CreditCarde" size={16} />
        <Text fontSize="1.2rem" weight={600} lineHeight="133.333%" uppercase>
          Paiement & facturation
        </Text>
      </Box>
      <StyledBox>
        <Box flex align="flex-start" gap="16px">
          <Box flex col align="flex-start" gap="8px" width="">
            {facturationData.map((data, index) => (
              <Box key={index} flex align="flex-start" gap="8px">
                <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6C6D70">
                  {data.label}
                </Text>
                <Text fontSize="1.2rem" weight={600} lineHeight="133.333%">
                  {data.value}
                </Text>
              </Box>
            ))}
          </Box>
          <Line />
          <Box flex col align="flex-start" justify="space-between" height="80px">
            {additionnalData.map((data, index) => (
              <Box key={index} flex col align="flex-start" gap="4px">
                <Text fontSize="1.2rem" weight={400} lineHeight="133.333%" color="#6C6D70">
                  {data.label}
                </Text>
                <Text fontSize="1.2rem" weight={600} lineHeight="133.333%">
                  {data.value}
                </Text>
              </Box>
            ))}
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
  align-items: flex-end;
  gap: 24px;
  align-self: stretch;
  border-radius: 4px;
  background: var(--colors-secondary-white-100, #fcfcfc);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Line = styled.div`
  width: 1px;
  height: 88px;
  align-self: stretch;
  background: #e6e6e6;
`

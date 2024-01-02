import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const PersonnalInfo = () => {
  const personnalData = [
    {
      label: "Nom de l'entreprise: ",
      value: 'AMAPII'
    },
    {
      label: 'Nom & prénom du représentant: ',
      value: 'Jean-Marc Affionme'
    },
    {
      label: 'Email du représentant: ',
      value: 'j***********e@amapii.com'
    },
    {
      label: 'Tel. du représentant:',
      value: '**********70'
    }
  ]

  const additionnalData = [
    {
      label: 'Numéro de SIRET: ',
      value: '123456789101112'
    },
    {
      label: 'Immatriculation RCS: ',
      value: 'RCS PARIS B 517403572'
    },
    {
      label: 'Adresse du siège social: ',
      value: '18 Bis Rue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220'
    }
  ]

  return (
    <Box flex col align="flex-start" gap="4px">
      <Box flex align="flex-start" gap="4px">
        <Icon icon="UserInfo" size={16} />
        <Text uppercase fontSize="1.2rem" weight={600} lineHeight="133.333%">
          Informations personnelles
        </Text>
      </Box>
      <StyledBox>
        <Box flex align="flex-start" gap="16px">
          <Box flex col align="flex-start" gap="8px" width="375.5px">
            {personnalData.map((data, index) => (
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
          <Box flex col align="flex-start" gap="8px" width="375.5px">
            {additionnalData.map((data, index) => (
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

const Line = styled.div`
  width: 1px;
  height: 88px;
  align-self: stretch;
  background: #e6e6e6;
`

import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const BillingHistory = () => {
  const billingData = [
    {
      date: 'Juin 2023',
      formule: 'Formule Pro',
      price: '236.16€'
    },
    {
      date: 'Mai 2023',
      formule: 'Formule Pro',
      price: '236.16€'
    },
    {
      date: 'Avril 2023',
      formule: 'Formule Pro',
      price: '236.16€'
    }
  ]

  return (
    <Box flex col align="flex-start" gap="4px">
      <Box flex align="flex-start" gap="4px">
        <Icon icon="Box" size={16} />
        <Text fontSize="1.2rem" weight={600} lineHeight="133.333%" uppercase>
          Historique de facturation
        </Text>
      </Box>
      <StyledBox>
        {billingData.map((data, index) => (
          <Box key={index}>
            <Box flex align="center" justify="space-between" width="784px">
              <Box flex col align="flex-start">
                <Text fontSize="1.2rem" weight={800} lineHeight="100%" uppercase color="#0e738a">
                  {data.date}
                </Text>
                <Text fontSize="2rem" weight={600} lineHeight="100%">
                  {data.formule}
                </Text>
                <Text fontSize="1.2rem" weight={600} lineHeight="100%" color="6c6d70">
                  {data.price}
                </Text>
              </Box>
              <Box flex align="flex-start" gap="4px">
                <Icon icon="Show" size={16} />
                <Icon icon="Download" size={16} />
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
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 4px;
  background: var(--colors-secondary-white-100, #fcfcfc);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Line = styled.div`
  height: 1px;
  align-self: stretch;
  background: #e6e6e6;
  width: 784px;
  margin-top: 8px;
`

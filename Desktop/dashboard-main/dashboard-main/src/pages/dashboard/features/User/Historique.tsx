import React from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const Historique = () => {
  const historiqueData = [
    {
      date: 'Janvier 2023',
      price: '363.6€',
      offer: 'Offre Pro',
      formule: '18 Utilisateurs (20.20€/'
    },
    {
      date: 'Janvier 2023',
      price: '363.6€',
      offer: 'Offre Découverte',
      formule: 'Gratuit'
    }
  ]
  const reapeatData = Array(4).fill(historiqueData).flat()

  const numPageData = [
    {
      number: '1'
    },
    {
      number: '2'
    },
    {
      number: '3'
    },
    {
      number: '4'
    },
    {
      number: '5'
    },
    {
      number: '6'
    },
    {
      number: '...'
    },
    {
      number: '19'
    },
    {
      number: '20'
    }
  ]

  return (
    <Box flex col align="flex-start" gap="0.4rem" width="816px">
      <Box flex justify="center" align="center" gap="0.8rem">
        <IconBox>
          <Icon icon="Box" size={16} />
        </IconBox>
        <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" uppercase>
          Historique de facturation
        </Text>
      </Box>
      <Box flex align="flex-start" gap="16px" wrap="wrap" width="816px">
        {reapeatData.map((data, index) => (
          <HistoriqueBox key={index}>
            <Box flex col align="flex-start" gap="4px">
              <Box flex align="flex-start" justify="space-between" width="172px">
                <Text fontSize="1.6rem" weight={700} lineHeight="100%" uppercase color="#0E738A">
                  {data.date}
                </Text>
                <Text fontSize="1.6rem" weight={700} lineHeight="100%" uppercase color="#0E738A">
                  {data.price}
                </Text>
              </Box>
              <Box flex align="flex-start" gap="4.5px">
                <OfferText>{data.offer}</OfferText>
              </Box>
              <Text fontSize="1.6rem" weight={600} lineHeight="100%" color="#6A6B6D">
                {data.formule}
              </Text>
            </Box>
            <Box flex gap="4px">
              <Icon icon="Show" size={16} />
              <Icon icon="Download" size={16} />
            </Box>
          </HistoriqueBox>
        ))}
      </Box>
      <Box flex align="center" justify="center" gap="8px" width="816px">
        <Icon icon="ChevronLeft" size={24} />
        {numPageData.map((data, index) => (
          <Box key={index} flex align="center" gap="8px">
            <Text fontSize="1.6rem" weight={400} lineHeight="150%">
              {data.number}
            </Text>
          </Box>
        ))}
        <Icon icon="ChevronRight" size={24} />
      </Box>
    </Box>
  )
}

const HistoriqueBox = styled(Box)`
  display: flex;
  width: 192px;
  padding: 16px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: var(--radius-element, 4px);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const OfferText = styled(Text)`
  color: var(--global-text-title-regular-default, var(--colors-secondary-black-500, #202124));
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`
const IconBox = styled(Box)`
  display: flex;
  padding: 4px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--colors-secondary-500, #0e738a);
  box-shadow: 1px 0px 24px 0px rgba(32, 33, 36, 0.06);
`

import React from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Button } from '../Button'
import { Card } from '../Card'
import { Heading, StyledHeading } from '../Heading'
import { Label } from '../Label'
import { Text } from '../Text'

export interface PricingCardProps {
  type: 'discovery' | 'pro' | 'pro+'
  title: string
  recurrence: string
  price: string | number
  description: string
  mostPopular: boolean
  showActionButton?: boolean
  features: string[]
}

export const PricingCard: React.FC<PricingCardProps> = ({
  mostPopular,
  type,
  title,
  price,
  recurrence,
  description,
  features,
  showActionButton = true
}) => {
  const getActionName = () => {
    if (type === 'discovery') return 'Essayer gratuitement'
    if (type === 'pro') return 'Créer un compte'
    if (type === 'pro+') return 'Demander un devis'
  }

  return (
    <CustomCard variant={type} className={mostPopular ? 'most-popular' : undefined}>
      {mostPopular && <VText>La plus populaire</VText>}
      <CardContent>
        <Box flex col full gap="4.3rem" justify="space-between">
          <Box flex col gap="1.2rem">
            {/* Card Description */}
            <Box flex col gap="3.2rem">
              <div>
                <Label>{title}</Label>
              </div>
              <div>
                <hgroup>
                  <Heading size="h3" variant="h2" lineHeight="100%" weight="bold">
                    {price}
                  </Heading>
                  <Text inlineBlock fontSize="1.2rem" lineHeight="100%" as="span" spaceAfter="1.4rem">
                    {recurrence}
                  </Text>
                  <Text fontSize="1.6rem" lineHeight="150%">
                    {description}
                  </Text>
                </hgroup>
              </div>
            </Box>
            {/* Card Features */}
            <div>
              <Text inlineBlock fontSize="1.2rem" lineHeight="100%" as="span" spaceAfter="1.6rem">
                Inclus :
              </Text>
              <FeatureList>
                {features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </FeatureList>
            </div>
          </Box>
          {/* Card Action */}
          {showActionButton && (
            <Box fullWidth>
              <Button fullWidth variant={type === 'pro' ? 'metallic' : 'outline'}>
                {getActionName()}
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>
    </CustomCard>
  )
}

const variants = {
  discovery: css`
    ${Label} {
      background-color: #e6e6e6;
      color: #6c6d70;
    }
  `,
  pro: css`
    ${Label} {
      background-color: #cfe3e8;
      color: #0e738a;
    }

    ${StyledHeading} {
      color: #0e738a;
    }
  `,
  'pro+': css`
    ${Label} {
      background-color: #e5def3;
      color: #7f5cc4;
    }
  `
}

const CustomCard = styled(Card)<{ variant: 'discovery' | 'pro' | 'pro+' }>`
  position: relative;
  box-sizing: border-box;
  border-radius: 0.4rem;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;

  max-width: 29.6rem;
  //min-width: 29.6rem;
  flex: 1 0 0;

  &.most-popular {
    border-color: #0e738a;
  }

  ${({ variant }) => variants[variant]}
`

const CardContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  flex-shrink: 0;
`

const VText = styled.span`
  display: inline-block;

  position: absolute;
  top: ${20 * 2}px;
  left: 0;
  padding: 0.8rem 0;
  transform: translateX(-50%);
  transform-origin: left center;
  writing-mode: vertical-rl;
  text-align: center;

  color: #0e738a;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 50%;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    height: 100%;
    background-color: #fcfcfc;

    z-index: -1;
  }
`

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  li {
    display: flex;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;

    &::before {
      content: '';
      display: block;
      padding: 0.2rem;
      margin-right: 1rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0.4rem;
      border: 1px solid #0e738a;

      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNOS41OTY1NCAzLjY5NjM2VjMuNjk2MzZaIiBmaWxsPSIjMEU3MzhBIiBzdHJva2U9IiMwRTczOEEiLz4KPC9zdmc+Cg==);
      background-size: cover;
    }
  }
`

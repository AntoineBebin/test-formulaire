import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const MyApplication = () => {
  return (
    <Box flex justify="center" align="flex-start" gap="24px">
      <StyledBox>
        <Box flex align="flex-start" justify="space-between" width="364px">
          <Box flex align="flex-start" gap="8px">
            <PurpleBox>
              <Icon icon="Missing" size={16} />
            </PurpleBox>
            <Text fontSize="2.4rem" weight={700} lineHeight="133.333%">
              Eventify
            </Text>
          </Box>
          <GreenBox>
            <Text fontSize="1.6rem" weight={700} lineHeight="133.333%" uppercase color="#44893E">
              Offre découverte
            </Text>
          </GreenBox>
        </Box>
        <Line />
        <Text fontSize="1.6rem" weight={400} lineHeight="125%" color="#6A6B6D">
          Organisez des événements et créez des sondages en quelques clics !
        </Text>
        <Box flex align="flex-start" gap="16px">
          <IconBox>
            <Icon icon="Missing" size={24} />
          </IconBox>
          <Button color="#0E738A" startIcon={<Icon icon="ExternalLink" size={24} />}>
            <Text fontSize="1.6rem" weight={700} lineHeight="171.429%" uppercase>
              Accéder à l&apos;application
            </Text>
          </Button>
        </Box>
      </StyledBox>
      <StyledBox>
        <Box flex align="flex-start" justify="space-between" width="364px">
          <Box flex align="flex-start" gap="8px">
            <PurpleBox className="grey">
              <Icon icon="Briefcase" size={16} />
            </PurpleBox>
            <Text fontSize="2.4rem" weight={700} lineHeight="133.333%" color="#6A6B6D">
              Workify
            </Text>
          </Box>
          <GreyBox>
            <Text fontSize="1.6rem" weight={700} lineHeight="133.333%" uppercase color="#6A6B6D">
              Inactif
            </Text>
          </GreyBox>
        </Box>
        <Line />
        <Text fontSize="1.6rem" weight={400} lineHeight="125%" color="#6A6B6D">
          Gérez vos compte-rendu d’activité, notes de frais et plus encore, en tout simplicité !
        </Text>
        <Box flex align="flex-start" gap="16px" width="364px">
          <Button fullWidth>
            <Text fontSize="1.6rem" weight={700} lineHeight="171.429%" uppercase>
              Activer mon espace pro
            </Text>
          </Button>
        </Box>
      </StyledBox>
    </Box>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--radius-element, 4px);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const PurpleBox = styled(Box)`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--tag-background-pro, #e5def3);
`
const GreenBox = styled(Box)`
  display: flex;
  padding: 8px 10px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--colors-status-success-50, #dae7d8);

  &grey {
    background: var(--colors-secondary-black-50, #d2d3d3);
  }
`
const Line = styled.div`
  height: 1px;
  width: 364px;
  align-self: stretch;
  background: var(--colors-secondary-black-50, #d2d3d3);
`
const IconBox = styled(Box)`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-element, 4px);
  border: 2px solid var(--cta-secondary-border-black-initial, #202124);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const GreyBox = styled(Box)`
  display: flex;
  padding: 8px 10px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--colors-secondary-black-50, #d2d3d3);
`

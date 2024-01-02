import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import { ActiveSuscribe } from './SuscribeManage/ActiveSuscribe'
import { BillingHistory } from './SuscribeManage/BillingHistory'
import { Facturation } from './SuscribeManage/Facturation'
import { PersonnalInfo } from './SuscribeManage/PersonalInfo'
import { SupportSuscribe } from './SuscribeManage/SupportSuscribe'
import { SuscribeAcces } from './SuscribeManage/SuscribeAcces'

export const AdminDashboard = () => {
  return (
    <StyledBox>
      <Box flex align="center">
        <Box flex align="center" gap="0.4rem" width="81.6rem" justify="space-between">
          <Box flex align="center" gap="0.4rem">
            <SuscribeBox>
              <Text fontSize="1.6rem" weight={400} lineHeight="1.6rem" color="#6A6B6D">
                Gestion des abonnés
              </Text>
              <Icon icon="ChevronRight" size={16} />
            </SuscribeBox>
            <Box flex justify="flex-end" align="flex-start" gap="0.8rem">
              <Text fontSize="1.6rem" weight={700} lineHeight="1.6rem" color="#0E738A">
                AMAPII
              </Text>
            </Box>
          </Box>
          <Button>CONTACTER AMAPII</Button>
        </Box>
      </Box>
      <PersonnalInfo />
      <SupportSuscribe />
      <Box flex align="flex-start" gap="2.4rem">
        <SuscribeAcces />
        <ActiveSuscribe />
      </Box>
      <Facturation />
      <BillingHistory />
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  padding: 2.4rem 2.4rem 2.4rem 19.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  flex: 1 0 0;
  border-radius: var(--radius-container, 0.8rem);
  background: rgba(245, 245, 245, 0.5);

  /* glassy/default */
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  width: 103.2rem;
  margin-left: 23%;
`
const SuscribeBox = styled(Box)`
  display: flex;
  padding: 1.2rem;
  align-items: flex-start;
  gap: var(--radius-container, 0.8rem);
  border-radius: var(--radius-element, 0.4rem);
  background: var(--global-background-transparent-stronger, rgba(245, 245, 245, 0.7));

  /* shadow/secondLevel */
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`

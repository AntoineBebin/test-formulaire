import styled from 'styled-components'

import { Box } from '@/components/ui'

import { ModalProvider } from '../../components/ModalContext'
import { EditAcces } from '../Modal/EditAcces'
import { EditAcces2 } from '../Modal/EditAcces2'
import { EditAcces3 } from '../Modal/EditAcces3'
import { EditInformation } from '../Modal/EditInformation'
import { EditPayment } from '../Modal/EditPayment'
import { EditPayment2 } from '../Modal/EditPayment2'
import { EditSuscribe } from '../Modal/EditSuscribe'

import { Acces } from './Acces'
import { Historique } from './Historique'
import { Informations } from './Informations'
import { Menu } from './Menu'
import { MyApplication } from './MyApllication'
import { PaymentFacturation } from './PaymentFacturation'
import { Support } from './Support'
import { Suscribe } from './Suscribe'

export interface ModalProps {
  showModal: boolean
  openModal: () => void
  closeModal: () => void
}
export const UserDashboard = () => {
  const menuData = [
    { icon: 'UserInfo', label: 'Mon compte' },
    { icon: 'Missing', label: 'Mes applications' },
    { icon: 'CreditCarde', label: 'Paiement & Facturation' },
    { icon: 'Bug', label: 'Support technique' }
  ]
  return (
    <ModalProvider>
      <>
        <EditInformation />
        <EditAcces />
        <EditAcces2 />
        <EditAcces3 />
        <EditPayment />
        <EditPayment2 />
        <EditSuscribe />
        <Menu menuData={menuData} />
        <Container>
          <Box flex col align="flex-start" gap="24px">
            <Box flex align="center" gap="24px">
              <Title>
                <span>M</span>on compte
              </Title>
              <Line />
            </Box>
            <Informations />
            <Box flex align="flex-start" gap="2.4rem">
              <Acces />
              <Suscribe />
            </Box>
          </Box>
          <Box flex col align="center" gap="24px">
            <Box flex align="center" gap="24px">
              <Title>
                <span>M</span>es applications
              </Title>
              <Line />
            </Box>
            <MyApplication />
          </Box>
          <Box flex col align="center" gap="24px">
            <Box flex align="center" gap="24px">
              <Title>
                <span>P</span>aiement & facturation
              </Title>
              <Line />
            </Box>
            <PaymentFacturation />
            <Historique />
          </Box>
          <Box flex col align="center" gap="24px">
            <Box flex align="center" gap="24px">
              <Title>
                <span>S</span>upport technique
              </Title>
              <Line />
            </Box>
            <Support />
          </Box>
        </Container>
      </>
    </ModalProvider>
  )
}
const Container = styled(Box)`
  display: flex;
  padding: 24px 24px 24px 192px;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  flex: 1 0 0;
  border-radius: var(--radius-container, 8px);
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  width: 1032px;
  margin-left: 50rem;
`
const Title = styled.h3`
  color: var(--global-text-title-regular-default, var(--colors-secondary-black-500, #202124));
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  font-family: 'Urbanist';
  span {
    color: #0e738a;
  }
`
const Line = styled.div`
  height: 1px;
  width: 609px;
  flex: 1 0 0;
  background: var(--colors-secondary-black-50, #d2d3d3);
`

import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import { Menu } from '../User/Menu'

import { Administrator } from './components/Administrator'

export const MyAccount = () => {
  const menuData = [
    { icon: 'Missing', label: 'Tableau de bord' },
    { icon: 'Briefcase', label: 'Gestion des abonnés' },
    { icon: 'Missing', label: 'Statistiques' },
    { icon: 'Bug', label: 'Support technique' }
  ]
  const infoData = [
    {
      label: 'Nom & prénom:',
      value: 'Jean-Marc Affionme'
    },
    {
      label: 'Poste:',
      value: 'Manager'
    },
    {
      label: 'Téléphone:',
      value: '********70'
    }
  ]
  const additionnalData = [
    {
      label: 'Adresse email:',
      value: 'j***************e@a****i.com'
    },
    {
      label: 'Authentification sécurisée:',
      value: 'Pas d’authentification en deux étapes'
    }
  ]

  const supportData = [
    {
      backgroundColor: '#cfe3e8',
      icon: <Icon icon="Bug" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: 'Modification des informations personne',
      status: 'Requête en cours de traitement'
    },
    {
      backgroundColor: '#F6E0CC',
      icon: <Icon icon="Settings" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: 'Gestion des widget',
      status: 'Requête en cours de traitement'
    },
    {
      backgroundColor: '#cfe3e8',
      icon: <Icon icon="Bug" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: "Création d'un compte administrateur",
      status: 'Requête en cours de traitement'
    },
    {
      backgroundColor: '#F6E0CC',
      icon: <Icon icon="Settings" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: "Ajout d'une fonctionnalité",
      status: 'Requête en cours de traitement'
    },
    {
      backgroundColor: '#E5DEF3',
      icon: <Icon icon="Briefcase" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: 'Négociation du tarif mensuel',
      status: 'Archivé le 1 Juin 2023'
    },
    {
      backgroundColor: '#F6D0D0',
      icon: <Icon icon="Warning" size={24} />,
      title: 'AMAPII - Abonnement Pro+',
      subtitle: 'Connexion au service impossible',
      status: 'Archivé le 5 Mai 2023'
    }
  ]

  return (
    <MarginBox>
      <Box flex align="flex-start">
        <MenuBox>
          <Menu menuData={menuData} />
        </MenuBox>
        <StyledBox>
          <Box flex align="center" gap="24px">
            <Title>
              <span>T</span>ableau de bord
            </Title>
            <SecondLine />
          </Box>
          <Box flex col align="flex-start" gap="2.4rem">
            <Box flex align="center" justify="space-between" width="816px">
              <Box flex align="center" justify="center" gap="6px">
                <IconBox>
                  <Icon icon="Missing" size={16} />
                </IconBox>
                <Text fontSize="1.6rem" weight={700} lineHeight="100%" uppercase>
                  Informations personnelles
                </Text>
              </Box>
              <Box flex align="center" justify="center" gap="0.8rem">
                <Icon icon="Edit" size={16} />
                <Text font-fontSize="1.6rem" lineHeight="1.6em" uppercase weight={700} color="#0e738a">
                  Modifier mes informations
                </Text>
              </Box>
            </Box>
          </Box>
          <InfoBox>
            <Box flex align="flex-start" gap="16px">
              <Box flex col align="flex-start" gap="8px" width="375.5px">
                {infoData.map((data, index) => (
                  <Box key={index} flex align="flex-start" gap="0.8rem">
                    <Text fontSize="1.2rem" weight={400} lineHeight="1.6em" color="#6C6D70">
                      {data.label}
                    </Text>
                    <Text fontSize="1.2rem" weight={600} lineHeight="1.6rem">
                      {data.value}
                    </Text>
                  </Box>
                ))}
              </Box>
              <Line />
              <Box flex col align="flex-start" gap="8px" width="375.5px">
                {additionnalData.map((data, index) => (
                  <Box key={index} flex align="flex-start" gap="0.8rem">
                    <Text fontSize="1.2rem" weight={400} lineHeight="1.6rem" color="#6c6d70">
                      {data.label}
                    </Text>
                    <Text fontSize="1.2rem" weight={600} lineHeight="1.6rem">
                      {data.value}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box flex align="flex-start" gap="2.4rem">
              <BlackButton>Ajouter l&apos;authentification en deux étapes</BlackButton>
              <YellowButton>Modifier mes identifiants</YellowButton>
            </Box>
          </InfoBox>
          <Box flex align="center" justify="space-between" width="816px">
            <Box flex align="center" justify="center" gap="0.8rem">
              <IconBox>
                <Icon icon="Hotline" size={16} />
              </IconBox>
              <Text fontSize="1.6rem" weight={700} lineHeight="100%" uppercase>
                Support technique
              </Text>
            </Box>
            <Box flex align="center" justify="center" gap="0.8rem">
              <Icon icon="ChevronRight" size={16} />
              <Text font-fontSize="1.4rem" lineHeight="1.6em" uppercase weight={700} color="#0e738a">
                Voir toutes les requêtes
              </Text>
            </Box>
          </Box>
          <InfoBox>
            <Box flex align="flex-start" gap="8px 24px" wrap="wrap">
              {supportData.map((data, index) => (
                <Box key={`box-${index}`} flex align="center" gap="16px" width="380px" justify="space-between">
                  <Box flex align="flex-start" gap="0.8rem">
                    <Box flex padding="0.8rem" align="center" gap="0.8rem" backgroundColor={data.backgroundColor}>
                      {data.icon}
                    </Box>
                    <Box flex col align="flex-start" gap="0.4rem">
                      <Text font-fontSize="1.2rem" lineHeight="1.2em" uppercase weight={700} color="#0e738a">
                        {data.title}
                      </Text>
                      <EllipsisText>{data.subtitle}</EllipsisText>
                      <Text fontSize="1.2rem" weight={400} lineHeight="1.2em" color="#D16200">
                        {data.status}
                      </Text>
                    </Box>
                  </Box>
                  <Icon icon="Message" size={12} />
                </Box>
              ))}
            </Box>
          </InfoBox>
          <Administrator />
        </StyledBox>
      </Box>
    </MarginBox>
  )
}
const StyledBox = styled(Box)`
  display: flex;
  width: 103.2rem;
  padding: 2.4rem 2.4rem 2.4rem 19.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
`
const InfoBox = styled(Box)`
  display: flex;
  margin-top: -5rem;
  padding: 2.4rem 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  align-self: stretch;
  border-radius: 0.4rem;
  background: #fcfcfc;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  width: 81.6rem;
`
const Line = styled.div`
  width: 0.1rem;
  align-self: stretch;
  background: #e6e6e6;
  height: 4.8rem;
`
const SecondLine = styled.div`
  height: 1px;
  width: 433px;
  flex: 1 0 0;
  background: var(--colors-secondary-black-50, #d2d3d3);
`
const BlackButton = styled(Button)`
  display: flex;
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  height: 4.8rem;
  background: #fdfdfd;
  border-radius: 0.4rem;
  border: 2px solid #202124;
  color: #202124;
  font-family: 'Urbanist';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem; /* 171.429% */
  letter-spacing: 0.07rem;
  text-transform: uppercase;
`
const YellowButton = styled(Button)`
  width: 37.5rem;
`
const MarginBox = styled(Box)`
  margin-left: 20rem;
`
const MenuBox = styled(Box)`
  position: absolute;
  z-index: 1;
  top: -1rem;
  left: -30rem;
`
const Title = styled.h3`
  color: var(--global-text-title-regular-default, var(--colors-secondary-black-500, #202124));
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  font-family: 'Urbanist';
  span {
    color: #0e738a;
  }
`
const IconBox = styled(Box)`
  display: flex;
  padding: 4px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: #0e738a;
  box-shadow: 1px 0px 24px 0px rgba(32, 33, 36, 0.06);
`
const EllipsisText = styled(Text)`
  overflow: hidden;
  color: var(--global-text-title-regular-default, var(--colors-secondary-black-500, #202124));
  text-overflow: ellipsis;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`

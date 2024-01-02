import React from 'react'
import styled from 'styled-components'

import { Box, Text, Button } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const Support = () => {
  const supportData = [
    {
      request: 'Modification des informations personnelles',
      advancement: 'Requête en cours de traitement'
    },
    {
      request: 'Gestion des widget',
      advancement: 'Requête en cours de traitement'
    },
    {
      request: "Création d'un compte administrateur",
      advancement: 'Requête en cours de traitement'
    },
    {
      request: 'Ajout d’une fonctionnalité',
      advancement: 'Requête en cours de traitement'
    },
    {
      request: 'Négociation du tarif mensuel',
      advancement: 'Archivé le 1 Juin 2023'
    },
    {
      request: 'Connexion au service impossible',
      advancement: 'Archivé le 1 Juin 2023'
    }
  ]

  return (
    <Box>
      <StyledBox>
        <Box flex align="flex-start" gap="24px" wrap="wrap">
          {supportData.map((data, index) => (
            <SupportBox key={index}>
              <IconBox>
                <Icon icon="Bug" size={16} />
              </IconBox>
              <Box flex col align="flex-start" gap="4px">
                <Text fontSize="1.6rem" weight={600} lineHeight="100%">
                  {data.request}
                </Text>
                <Text fontSize="1.2rem" weight={400} lineHeight="100%">
                  {data.advancement}
                </Text>
              </Box>
            </SupportBox>
          ))}
        </Box>
        <Box flex justify="flex-end" align="center" gap="24px" width="784px">
          <Box flex justify="center" align="center" gap="8px">
            <Icon icon="Missing" size={16} />
            <Text fontSize="1.4rem" weight={700} lineHeight="114.286%" uppercase>
              Toutes mes requêtes
            </Text>
          </Box>
          <Button startIcon={<Icon icon="Plus" size={24} />}>
            <Text fontSize="1.4rem" weight={700} lineHeight="171.429%" uppercase>
              Créer une requête
            </Text>
          </Button>
        </Box>
      </StyledBox>
    </Box>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  padding: 24px 16px;
  width: 816px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  border-radius: var(--radius-element, 4px);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const IconBox = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--colors-secondary-50, #cfe3e8);

  &purple {
    background: #e5def3;
  }
  &orange {
    background: #f6e0cc;
  }
  &red {
    background: #f6d0d0;
  }
`

const SupportBox = styled(Box)`
  display: flex;
  width: 380px;
  min-width: 264px;
  align-items: center;
  gap: 16px;
`
// const Line = styled.div`
//   height: 1px;
//   min-width: 264px;
//   flex: 1 0 0;
//   background: var(--colors-secondary-black-50, #d2d3d3);
// `

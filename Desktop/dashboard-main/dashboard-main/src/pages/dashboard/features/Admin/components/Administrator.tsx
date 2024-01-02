import { useState } from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

import { AddAdministrator } from './AddAdministartor/AddAdministrator'

interface AdministratorBoxProps {
  editing: boolean
}

export const Administrator = () => {
  const [isAddAdminVisible, setAddAdminVisible] = useState(false)
  const [selectedAdminIndex, setSelectedAdminIndex] = useState<number | null>(null)
  const [selectedAdminData, setSelectedAdminData] = useState<any>(null)

  const TabAdministrator = [
    {
      firstname: 'Jean-Marc',
      lastname: ' AFFIONME',
      email: 'jeanmarc.affionme@deja.com'
    },
    {
      firstname: 'Sara',
      lastname: 'ROS LOYEN',
      email: 'sara.rosloyen@cdejavu.com'
    },
    {
      firstname: 'Djacoba-Jaozara',
      lastname: 'TEHINDRAZANARIVELO',
      email: 'djacoba-jaozara.tehindrazanarivelo@cdejavu.com'
    },
    {
      firstname: 'Yves',
      lastname: 'KOUAYIP',
      email: 'yves.kouayip@cdejavu.com'
    },
    {
      firstname: 'Marjolaine',
      lastname: 'HAURAY',
      email: 'marjolaine.hauray@cdejavu.com'
    },
    {
      firstname: 'Dorian',
      lastname: 'BOUISSET',
      email: 'dorian.bouisset@cdejavu.com'
    }
  ]

  const toggleAddAdmin = () => {
    setAddAdminVisible(!isAddAdminVisible)
  }
  const handleEditClick = (index: number) => {
    setSelectedAdminIndex(index)
    setSelectedAdminData(TabAdministrator[index])
    setAddAdminVisible(true)
  }

  const isEditing = (index: number) => {
    return selectedAdminIndex === index
  }

  return (
    <Box flex col align="flex-start" gap="0.8rem">
      <Box flex justify="space-between" align="center" width="81.6rem">
        <Box flex align="center" gap="0.6rem">
          <BlueBox>
            <Icon icon="Missing" size={16} />
          </BlueBox>
          <Text fontSize="1.6rem" weight={700} lineHeight="100%" uppercase>
            Liste des gestionnaires
          </Text>
        </Box>
        <Box flex align="center" justify="center" gap="0.8rem" onClick={toggleAddAdmin} style={{ cursor: 'pointer' }}>
          <Icon icon="Plus" size={16} />
          <Text fontSize="1.6rem" weight={700} lineHeight="114.286%" uppercase color="#0e738a">
            Ajouter un gestionnaire
          </Text>
        </Box>
      </Box>
      <Box flex col align="flex-start" gap="16px">
        <Box flex align="flex-start" gap="1.6rem" wrap="wrap">
          {TabAdministrator.map((admin, index) => (
            <AdministratorBox key={index as any} editing={isEditing(index)} onClick={() => handleEditClick(index)}>
              <Box flex col width="calc(100% - 32px)" gap="0.4rem">
                <Box flex align="flex-start" gap="0.4rem">
                  <Text fontSize="1.6rem" weight={700} lineHeight="100%" nowrap>
                    {admin.firstname}
                  </Text>
                  <Text fontSize="1.6rem" weight={400} lineHeight="100%" uppercase truncate>
                    {admin.lastname}
                  </Text>
                </Box>
                <Text fontSize="1.2rem" weight={400} lineHeight="100%" color="#0E738A" truncate>
                  {admin.email}
                </Text>
              </Box>
              <Icon icon="Edit" size={16} />
            </AdministratorBox>
          ))}
        </Box>
        {isAddAdminVisible && (
          <>
            <Line />
            <AddAdministrator selectedAdminData={selectedAdminData} />
          </>
        )}
      </Box>
    </Box>
  )
}

const BlueBox = styled(Box)`
  display: flex;
  padding: 0.4rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.4rem;
  background: var(--colors-secondary-500, #0e738a);
  box-shadow: 1px 0px 24px 0px rgba(32, 33, 36, 0.06);
`
const AdministratorBox = styled(Box)<AdministratorBoxProps>`
  display: flex;
  min-width: 24rem;
  padding: 1.6rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  flex: 1 0 0;
  height: 64px;
  border-radius: 0.4rem;
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  ${props =>
    props.editing &&
    `
    border-radius: 4px;
    border: 2px solid var(--colors-secondary-500, #0E738A);
    background: var(--colors-secondary-50, #CFE3E8);
    box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
  `}
`
const Line = styled.div`
  height: 1px;
  width: 816px;
  align-self: stretch;
  background: var(--colors-secondary-black-50, #d2d3d3);
`

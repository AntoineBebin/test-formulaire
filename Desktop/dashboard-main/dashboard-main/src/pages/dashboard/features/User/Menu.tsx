import React, { useState } from 'react'
import styled from 'styled-components'

import { Box, Text } from '@/components/ui'
import Icon from '@/components/ui/Icon'

interface MenuItem {
  icon: string
  label: string
}

interface Props {
  menuData: MenuItem[]
}

export const Menu: React.FC<Props> = ({ menuData }) => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setSelectedBox(prevIndex => (prevIndex === index ? null : index))
  }
  const IconComponent: React.FC<{ iconName: string }> = ({ iconName }) => {
    switch (iconName) {
      case 'UserInfo':
        return <Icon size={24} icon="UserInfo" />
      case 'Missing':
        return <Icon size={24} icon="Missing" />
      case 'CreditCarde':
        return <Icon size={24} icon="CreditCarde" />
      case 'Bug':
        return <Icon size={24} icon="Bug" />
      case 'Briefcase':
        return <Icon size={24} icon="Briefcase" />
      default:
        return null
    }
  }

  return (
    <MenuBox>
      <ContentBox flex col align="flex-start" gap="2.4rem">
        {menuData.map((data, index) => (
          <StyledBox key={index} isColored={selectedBox === index} onClick={() => handleItemClick(index)} cursor="pointer">
            <IconComponent iconName={data.icon} />
            <Text fontSize="1.6rem" weight={400} lineHeight="2.4rem">
              {data.label}
            </Text>
          </StyledBox>
        ))}
      </ContentBox>
    </MenuBox>
  )
}

const MenuBox = styled(Box)`
  display: flex;
  width: 264px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: var(--radius-element, 4px);
  background: var(--colors-secondary-white-50, #fdfdfd);
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
  position: absolute;
  top: 175px;
  left: 405px;
  z-index: 1;
`

const StyledBox = styled(Box)<{ isColored: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${props => (props.isColored ? '#CFE3E8' : 'transparent')};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`
const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  margin-left: -10px;
`

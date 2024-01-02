import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Box, Text, Input } from '@/components/ui'
import Icon from '@/components/ui/Icon'

interface AddAdministratorProps {
  selectedAdminData: any
}

export const AddAdministrator: React.FC<AddAdministratorProps> = ({ selectedAdminData }) => {
  const [formData, setFormData] = useState(selectedAdminData)

  useEffect(() => {
    setFormData(selectedAdminData)
  }, [selectedAdminData, setFormData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const updatedFormData = { ...formData, [key]: e.target.value }
    setFormData(updatedFormData)
  }

  return (
    <Box flex align="flex-end" gap="16px">
      <Box flex col align="flex-start" gap="4px">
        <Texte>Nom du gestionnaire</Texte>
        <Input placeholder="Deladmin" type="text" value={formData?.lastname || ''} onChange={e => handleInputChange(e, 'lastname')} />
      </Box>
      <Box flex col align="flex-start" gap="4px">
        <Texte>Prénom du gestionnaire</Texte>
        <Input placeholder="Robert" type="text" value={formData?.firstname || ''} onChange={e => handleInputChange(e, 'firstname')} />
      </Box>
      <Box flex col align="flex-start" gap="4px" minWidth="320px">
        <Box flex align="flex-start" gap="4px">
          <Texte>Adresse email du gestionnaire</Texte>
          <Icon icon="InfoFill" size={12} />
        </Box>
        <Input
          placeholder="robert.deladmin@cdejavu.com"
          type="text"
          value={formData?.email || ''}
          onChange={e => handleInputChange(e, 'email')}
        />
      </Box>
      <Icon icon="Missing" size={24} />
      <Icon icon="Close" size={24} />
    </Box>
  )
}

const Texte = styled(Text)`
  color: var(--input-text-label, var(--colors-secondary-black-500, #202124));
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
`

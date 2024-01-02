import styled from 'styled-components'

import { Box, Text, Input } from '@/components/ui'
import Icon from '@/components/ui/Icon'

export const InputRequest = () => {
  return (
    <Box flex align="flex-end" gap="2.4rem">
      <Box flex col align="flex-start" gap="0.4rem">
        <Text uppercase fontSize="1.2rem" weight={700} lineHeight="1.6em">
          Motif de la requête
        </Text>
        <Box flex padding="0.4rem" align="center" gap="1.6rem">
          <Input hidden placeholder="Motif de la requête qui peut prendre de la place"></Input>
          <IconBox>
            <Icon icon="Close" size={24} />
          </IconBox>
        </Box>
      </Box>
      <AttachmentBox>
        <Icon icon="AddAttachment" size={24} />
      </AttachmentBox>
    </Box>
  )
}
const IconBox = styled(Box)`
  display: flex;
  padding: 0.8rem;
  align-items: flex-end;
  gap: 0.8rem;
  border-radius: 0.4rem;
`
const AttachmentBox = styled(Box)`
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.4rem;
  border: 2px solid #202124;
  box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`

import styled, { css } from 'styled-components'

import { Space } from '@/components/ui'
import { mediaQuery } from '@/styles/media'

interface ModalCardProps {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string
}

const ModalCard = styled(Space)<ModalCardProps>`
  position: relative;
  display: flex;
  padding: 5.6rem 2.4rem 2.4rem 2.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
  width: 100%;
  height: 100%;
  max-height: 60rem;
  max-width: 93.6rem;

  border-radius: 0.8rem;
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}

  margin-top: -3.5rem;

  ${mediaQuery('md')} {
    align-items: center;
    margin-left: -35rem;
    width: 100%;
  }
`

export default ModalCard

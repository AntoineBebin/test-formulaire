import styled, { css } from 'styled-components'

import { Space } from '@/components/ui'
import { mediaQuery } from '@/styles/media'

interface ModalTitleProps {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string
}

const ModalTitle = styled(Space)<ModalTitleProps>`
  position: relative;
  top: -1rem;
  left: -1.6rem;
  display: flex;
  padding: 1.6rem 3.2rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: var(--radius-element, 0.4rem);
  background: #fdfdfd;
  box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
  max-height: 6.4rem;
  max-width: 40rem;
  z-index: 99;

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

    ${mediaQuery('md')} {
    align-items: flex-start;
  }
`
export default ModalTitle

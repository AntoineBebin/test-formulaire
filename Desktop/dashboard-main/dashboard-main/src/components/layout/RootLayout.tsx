import React from 'react'
import styled from 'styled-components'

import { mediaQuery } from '@/styles/media'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled('div')`
  display: flex;
  flex: 1 1 auto;

  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  line-height: 150%;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-weight: 400;
  font-style: normal;
  background: ${props => props.theme.variables.bodyBackgroundColor};
  width: 100%;
  height: 100%;

  /* ${mediaQuery('xs')} {
    font-size: 14px;
  } */
`

export default RootLayout

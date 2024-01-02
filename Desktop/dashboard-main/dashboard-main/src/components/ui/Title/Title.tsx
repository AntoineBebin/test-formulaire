import styled from 'styled-components'

import { Align } from '../Heading'

interface TitleProps {
  align?: Align
}

export const Title = styled.h2<TitleProps>`
  font-family: 'Ibarra Real Nova', sans-serif;
  font-size: 12rem;

  font-weight: 400;
  line-height: 100%;

  color: var(--cra-main-lighter-shade-1, #5ea2b1);

  text-align: ${({ align }) => align};
`

export default Title

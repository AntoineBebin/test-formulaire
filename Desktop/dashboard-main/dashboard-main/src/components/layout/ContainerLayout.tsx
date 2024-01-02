import styled from 'styled-components'

import { mediaQuery } from '@/styles/media'

export const ContainerLayout = styled('div')`
  position: relative;
  padding: 0;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  padding-left: ${props => props.theme.variables.smallContainerPadding};
  padding-right: ${props => props.theme.variables.smallContainerPadding};

  ${mediaQuery('md', 'min')} {
    margin-left: auto;
    margin-right: auto;
    padding-left: ${props => props.theme.variables.largeContainerPadding};
    padding-right: ${props => props.theme.variables.largeContainerPadding};
  }

  ${mediaQuery('xl', 'min')} {
    max-width: ${props => props.theme.variables.containerMaxWidth};
    padding-left: 0;
    padding-right: 0;
  }
`

export default ContainerLayout

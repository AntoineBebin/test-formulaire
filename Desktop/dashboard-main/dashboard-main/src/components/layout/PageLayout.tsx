import styled from 'styled-components'

import Background from '@/assets/icons/pattern.svg'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  min-height: 100%;
  z-index: ${props => props.theme.variables.zIndex.layout};

  background-image: url(${Background});
  background-repeat: repeat;
`

export default PageLayout

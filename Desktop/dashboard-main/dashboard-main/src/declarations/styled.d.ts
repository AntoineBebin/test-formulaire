import 'styled-components'
import { Theme } from '@cdejavu/ui'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

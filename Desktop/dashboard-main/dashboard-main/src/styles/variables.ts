import { transparentize } from 'polished'

import colors from './colors'

const zIndex = {
  modal: 99,
  header: 70,
  card: 20,
  sidebar: 10,
  footer: 5,
  navbar: 2,
  layout: 1,
  background: 0
}

const variables = {
  containerMaxWidth: '1128px',
  smallContainerPadding: '28px',
  largeContainerPadding: '40px',
  pageMaxWidthSmallScreen: '320px',
  bodyBackgroundColor: '#f5f4f1',
  headerBackgroundColor: '#080d0f',
  borderColorTable: transparentize(0.8, colors.primary),
  headerHeight: 64,
  mobileHeaderHeight: 64,
  menuNavIconSize: 40,
  menuMobileNavIconSize: 32,
  sidebarIconSize: 40,
  mobileNavbarMaxWidth: 280,
  buttonBorderRadius: '4px',
  zIndex
}

export default variables

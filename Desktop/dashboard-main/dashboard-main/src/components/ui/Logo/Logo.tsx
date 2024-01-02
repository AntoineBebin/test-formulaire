import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import SourceLogo from '@/assets/images/logo.svg'

type LogoProps = {
  size?: number
  to?: string
  children?: React.ReactNode
}

export const Logo = ({ to = '.', children }: LogoProps) => {
  return (
    <Link to={to}>
      <LogoDejaVu src={SourceLogo} />
      {children}
    </Link>
  )
}

export default Logo

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: fit-content;
`

const LogoDejaVu = styled.img`
  width: auto;
  height: 56px;
`

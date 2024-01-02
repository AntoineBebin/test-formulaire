import React, { useRef } from 'react'
import { useRoutes } from 'react-router-dom'

import { Support } from '../features/User/Support'

import { adminRoutes } from './admins'
import { userRoutes } from './users'

export const DashboardRoutes: React.FC = () => {
  const isAdmin = useRef<boolean>(true) // TODO: change to use auth hoock

  const commonRoutes = [{ path: 'support-technique', element: <Support /> }]

  const routes = isAdmin.current ? adminRoutes : userRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}

import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Box } from '../ui'

// import { GridLayout } from './GridLayout'
import MainLayout from './MainLayout'
import PageLayout from './PageLayout'
import RootLayout from './RootLayout'

export const Layout = () => {
  return (
    <Box relative>
      {/* <GridLayout /> */}
      <RootLayout>
        <PageLayout>
          <Header />
          <MainLayout>
            <Outlet />
          </MainLayout>
          <Footer />
        </PageLayout>
      </RootLayout>
    </Box>
  )
}

export default Layout

import React from 'react'

import { Head } from '@/components/Head/Head'
import { ContainerLayout } from '@/components/layout'
import { Box, Title } from '@/components/ui'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      {title && <Head title={title} />}
      <ContainerLayout>
        <Box>
          <Box flex col align="center" justify="center">
            <Title>Support technique</Title>
            {children}
          </Box>
        </Box>
      </ContainerLayout>
    </>
  )
}

export default Layout

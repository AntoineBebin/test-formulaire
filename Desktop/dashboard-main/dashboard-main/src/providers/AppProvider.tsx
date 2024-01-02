import { DellingrProvider } from '@cdejavu/ui'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <DellingrProvider enableVendorPrefixes>
    <HelmetProvider>
      <Router>{children}</Router>
    </HelmetProvider>
  </DellingrProvider>
)

export default AppProvider

import React from 'react'
import { Helmet } from 'react-helmet-async'

type HeadProps = {
  title?: string
  description?: string
}

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet title={title ? `${title}` : undefined} defaultTitle="DéjàVu">
      description && (
      <meta name="description" content={description} />)
    </Helmet>
  )
}

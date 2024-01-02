import React from 'react'
import styled, { css } from 'styled-components'
import { object, z } from 'zod'

import { Box, StyledButton, Form } from '../ui'

type FormValues = {
  email: string
}

const Schema = object({
  email: z.string().min(1, 'Email est obligatoire.').max(420)
})

interface NewsletterProps {
  fullWidth?: boolean
}

export const Newsletter: React.FC<NewsletterProps> = ({ fullWidth }) => {
  return (
    <Form<FormValues, typeof Schema>
      onSubmit={async values => {
        alert(JSON.stringify(values, null, 2))
      }}
      schema={Schema}
    >
      {({ register }) => (
        <Box flex align="center">
          <StyledInput fullWidth={fullWidth} {...register('email')} placeholder="fan-de-dejavu-97@hotmail.com" />
          <CustomStyledButton>M’inscrire</CustomStyledButton>
        </Box>
      )}
    </Form>
  )
}

// TODO: Update after to use Input Style field
export const StyledInput = styled.input<{ fullWidth?: boolean }>`
  display: flex;
  padding: 0rem 1.6rem;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 0;
  border-radius: 0.4rem 0rem 0rem 0.4rem;
  background: #fdfdfd;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;

  max-width: 45rem;

  &::placeholder {
    color: #b7b7b7;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      max-width: 100%;
    `}
`

export const CustomStyledButton = styled(StyledButton)`
  background: #ffd966;
  border-radius: 0rem 0.4rem 0.4rem 0rem;
`

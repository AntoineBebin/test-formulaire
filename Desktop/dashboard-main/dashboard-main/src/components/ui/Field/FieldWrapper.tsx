import React, { PropsWithChildren } from 'react'
import { FieldError } from 'react-hook-form'
import { Message } from 'react-hook-form/dist/types/errors'
import styled from 'styled-components'

import { Box } from '../Box'

export type FieldWrapperProps = {
  label?: string
  noLabel?: boolean
  error?: FieldError | { message?: Message } | undefined
  spaceAfterLabel?: string
}

type Props = PropsWithChildren<FieldWrapperProps>

export const FieldWrapper: React.FC<Props> = ({ label = '', noLabel, spaceAfterLabel, error, children }) => {
  return (
    <Box flex col fullWidth>
      <label>
        {!noLabel && <Span spaceAfterLabel={spaceAfterLabel}>{label}</Span>}
        <Box flex>{children}</Box>
      </label>
      {error?.message && (
        <ErrorWrapper>
          <TextError>{error?.message}</TextError>
        </ErrorWrapper>
      )}
    </Box>
  )
}

const Span = styled.span<{ spaceAfterLabel?: string }>`
  display: inline-block;
  border: 0;
  padding: 0;
  letter-spacing: 0.05em;
  color: rgb(132, 142, 156);
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  background-color: transparent;
  margin-bottom: ${({ spaceAfterLabel }) => spaceAfterLabel ?? '0px'};
`

const TextError = styled.span`
  background-color: transparent;
  color: #d31212;
  display: inline-block;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border: 0;
  margin: 0;
  padding: 0;
`

const ErrorWrapper = styled('div')`
  background-color: transparent;
  display: flex;
  text-decoration: none;
  align-items: flex-start;
  flex-direction: row;
  margin: ${({ theme }) => theme.spacings.tiny} 0 0;
  padding: 0;
`

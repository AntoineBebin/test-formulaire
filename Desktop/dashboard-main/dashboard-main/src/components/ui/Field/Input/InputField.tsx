import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper'

import Input, { InputWithAttributesProps } from './Input'

export type InputFieldProps = { registration: Partial<UseFormRegisterReturn> } & FieldWrapperProps & InputWithAttributesProps

export const InputField: React.FC<InputFieldProps> = ({ label, noLabel, outline, error, registration, ...props }) => {
  return (
    <FieldWrapper label={label} noLabel={noLabel} error={error} spaceAfterLabel={outline ? '0px' : '6px'}>
      <Input outline={outline} {...props} {...registration} />
    </FieldWrapper>
  )
}

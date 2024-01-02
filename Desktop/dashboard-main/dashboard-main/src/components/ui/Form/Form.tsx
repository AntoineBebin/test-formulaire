import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FormProvider, FieldValues } from 'react-hook-form'
import styled from 'styled-components'
import { TypeOf, ZodSchema, ZodType, ZodTypeDef } from 'zod'

import FormResetButton from './ResetButton'
import FormSubmitButton from './SubmitButton'

interface UseZodFormProps<T extends ZodSchema<any>> extends UseFormProps<TypeOf<T>> {
  schema: T
}

export const useZodForm = <T extends ZodSchema<any>>({ schema, ...formConfig }: UseZodFormProps<T>) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema)
  })
}

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
  options?: UseFormProps<TFormValues>
  id?: string
  schema?: Schema
}

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  id,
  schema
}: FormProps<TFormValues, Schema>) => {
  const form = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) })
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id={id}>
        <Fieldset disabled={form.formState.isSubmitting}>{children(form)}</Fieldset>
      </form>
    </FormProvider>
  )
}

Form.SubmitButton = FormSubmitButton
Form.ResetButton = FormResetButton

export default Form

const Fieldset = styled.fieldset`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`

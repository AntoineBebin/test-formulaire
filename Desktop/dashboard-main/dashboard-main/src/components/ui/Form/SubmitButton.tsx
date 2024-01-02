import { useFormContext } from 'react-hook-form'

import { Button, ButtonProps } from '../Button'

const FormSubmitButton = ({ children, disabled, ...props }: ButtonProps) => {
  const { formState } = useFormContext()

  return (
    <Button type="submit" loading={formState.isSubmitting} disabled={formState.isSubmitting || disabled} {...props}>
      {children}
    </Button>
  )
}

export default FormSubmitButton

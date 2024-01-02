import { useFormContext } from 'react-hook-form'

import { Button, ButtonProps } from '../Button'

const FormResetButton = ({ children, disabled, ...props }: ButtonProps) => {
  const { formState, clearErrors, reset } = useFormContext()

  const handleResetForm = () => {
    clearErrors()
    reset()
  }

  return (
    <Button type="reset" disabled={formState.isSubmitting || disabled} onClick={handleResetForm} {...props}>
      {children}
    </Button>
  )
}

export default FormResetButton

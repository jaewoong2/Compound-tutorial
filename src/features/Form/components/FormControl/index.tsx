import React, { forwardRef } from 'react'
import FormContextProvider from '../../context/FormContextProvider'
import { FormProviderProps } from '../../types'

type Props = FormProviderProps &
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const FormControl = forwardRef<HTMLFormElement, Props>(
  ({ children, isInvalid, isRequired, isDisabled, className, ...props }, ref) => {
    return (
      <FormContextProvider isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
        <form ref={ref} className={className} {...props}>
          {children}
        </form>
      </FormContextProvider>
    )
  }
)

export default FormControl

import { useContext } from 'react'
import { FormContextAPI } from '../context/FormContextProvider'

const useFormContext = () => {
  const context = useContext(FormContextAPI)
  if (context === undefined) {
    throw new Error('useFormContext는 FormControl 안에서 사용 되어야 합니다.')
  }
  return context
}

export default useFormContext

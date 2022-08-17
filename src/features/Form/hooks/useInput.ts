import { ChangeEventHandler, useCallback, useState } from 'react'

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? '')

  const handleCangeValue: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return [value, setValue, handleCangeValue] as const
}

export default useInput

import React from 'react'
import useInput from '../hooks/useInput'
import FormControl from './FormControl'
import FormInput from './FormInput'
import FormLabel from './FormLabel'

const FormWithInputAndLabel = () => {
  const [id, , onChangeID] = useInput()
  const [password, , onChangePassword] = useInput()

  return (
    <div>
      <FormControl className="flex w-full shrink-0 flex-col gap-3 p-2" isDisabled>
        <FormLabel className="cursor-auto">아이디</FormLabel>
        <FormInput className="w-full" value={id} onChange={onChangeID} />
      </FormControl>
      <FormControl className="flex w-full shrink-0 flex-col gap-3 p-2" isDisabled>
        <FormLabel>패스워드</FormLabel>
        <FormInput className="w-full" value={password} onChange={onChangePassword} />
      </FormControl>
    </div>
  )
}

export default FormWithInputAndLabel

import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  label: string
  type: string
}

const FormInput: React.VFC<Props> = (props) => {
  const { register } = useFormContext()

  return (
    <>
      <input
        className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-600'
        type={props.type}
        {...register(props.label)}
      />
    </>
  )
}

export default FormInput

import React from 'react'

import FormInput from '../../components/atoms/FormInput'
import ErrorMessage from '../../components/atoms/ErrorMessage'
import filter from '../../utils/filter'

type Props = {
  label: string
  type: string
  errorMessage: string | undefined
}

const InputForm: React.VFC<Props> = (props) => {
  return (
    <>
      <div className='mb-2'>
        <label>{filter.toUpperCamelCase(props.label)}</label>
      </div>
      <div className='mb-1'>
        <FormInput label={props.label} type={props.type} />
      </div>
      <ErrorMessage errorMessage={props.errorMessage} />
    </>
  )
}

export default InputForm

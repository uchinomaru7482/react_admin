import React from 'react'

import FormInput from '../../components/atoms/FormInput'
import ErrorMessage from '../../components/atoms/ErrorMessage'
import Label from '../atoms/Label'
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
        <Label text={filter.toUpperCamelCase(props.label)} />
      </div>
      <div className='mb-1'>
        <FormInput label={props.label} type={props.type} />
      </div>
      <ErrorMessage errorMessage={props.errorMessage} />
    </>
  )
}

export default InputForm

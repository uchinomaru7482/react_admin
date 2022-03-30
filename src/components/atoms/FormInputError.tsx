import React from 'react'

type Props = {
  errorMessage: string | undefined
}

const FormInputError: React.VFC<Props> = (props) => {
  return (
    <>
      <p className='text-left text-pink-500'>{props.errorMessage}</p>
    </>
  )
}

export default FormInputError

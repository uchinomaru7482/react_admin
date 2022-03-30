import React from 'react'

type Props = {
  errorMessage: string | undefined
}

const ErrorMessage: React.VFC<Props> = (props) => {
  return (
    <>
      <p className='text-left text-pink-500'>{props.errorMessage}</p>
    </>
  )
}

export default ErrorMessage

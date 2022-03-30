import React from 'react'

type Props = {
  label: string
}

const Button: React.VFC<Props> = (props) => {
  return (
    <>
      <button
        className='px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:bg-gray-700'
        type='submit'
      >
        {props.label}
      </button>
    </>
  )
}

export default Button

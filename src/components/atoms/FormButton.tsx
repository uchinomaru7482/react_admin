import React from 'react'

type Props = {
  label: string
  size: string
}

const FormButton: React.VFC<Props> = (props) => {
  let size = ''
  if (props.size === 'full') {
    size = 'w-full'
  }

  return (
    <>
      <button
        className={`${size} px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:bg-gray-700`}
        type='submit'
      >
        {props.label}
      </button>
    </>
  )
}

export default FormButton

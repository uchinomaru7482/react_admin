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
        className={`${size} px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600`}
        type='submit'
      >
        {props.label}
      </button>
    </>
  )
}

export default FormButton

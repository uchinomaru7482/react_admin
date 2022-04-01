import React from 'react'

type Props = {
  label: string
  type: string
  callback: () => void
}

const Button: React.VFC<Props> = (props) => {
  let color = ''
  if (props.type === 'Submit') {
    color = 'bg-gray-800 hover:bg-gray-700 text-gray-200'
  } else if (props.type === 'Warn') {
    color = 'bg-pink-600 hover:bg-pink-500 text-gray-200'
  } else if (props.type === 'Nomal') {
    color = 'bg-gray-300 hover:bg-gray-400 text-gray-800'
  }

  return (
    <>
      <button
        className={`${color} px-4 py-2 rounded-md`}
        onClick={props.callback}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button

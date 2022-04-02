import React from 'react'

type Props = {
  label: string
  type: string
  size: string
  callback: () => void
}

const Button: React.VFC<Props> = (props) => {
  let color = ''
  if (props.type === 'Submit') {
    color = 'bg-indigo-500 hover:bg-indigo-600'
  } else if (props.type === 'Warn') {
    color = 'bg-pink-500 hover:bg-pink-600'
  } else if (props.type === 'Nomal') {
    color = 'bg-gray-500 hover:bg-gray-600'
  }

  let size = ''
  if (props.size === 'full') {
    size = 'w-full'
  }

  return (
    <>
      <button
        className={`${color} ${size} px-4 py-2 rounded-md text-white`}
        onClick={props.callback}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button

import React from 'react'

type Props = {
  text: string
}

const Label: React.VFC<Props> = (props) => {
  return (
    <>
      <label className='text-gray-500 font-bold'>{props.text}</label>
    </>
  )
}

export default Label

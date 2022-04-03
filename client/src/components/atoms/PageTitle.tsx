import React from 'react'

type Props = {
  text: string
}

const PageTitle: React.VFC<Props> = (props) => {
  return (
    <>
      <h2 className='text-2xl font-bold text-gray-700 leading-tight mr-auto text-left'>
        {props.text}
      </h2>
    </>
  )
}

export default PageTitle

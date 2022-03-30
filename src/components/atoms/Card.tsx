import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Card: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <div className='bg-white rounded-md shadow-md p-6'>{children}</div>
    </>
  )
}

export default Card

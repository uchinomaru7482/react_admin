import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Frame: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <div className='container mx-auto px-8 pt-6 pb-20'>{children}</div>
    </>
  )
}

export default Frame

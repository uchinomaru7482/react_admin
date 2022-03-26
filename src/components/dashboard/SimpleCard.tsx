import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  content: string
}

const SimpleCard: React.VFC<Props> = (props) => {
  return (
    <>
      <div className='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
        <div className='p-3 rounded-full bg-indigo-600 bg-opacity-75'>
          {props.children}
        </div>
        <div className='mx-5'>
          <h4 className='text-2xl font-semibold text-gray-700 text-left'>
            {props.content}
          </h4>
          <div className='text-gray-500'>{props.title}</div>
        </div>
      </div>
    </>
  )
}

export default SimpleCard

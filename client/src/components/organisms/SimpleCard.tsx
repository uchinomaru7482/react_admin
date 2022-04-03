import React, { ReactNode } from 'react'

import Card from '../../components/atoms/Card'

type Props = {
  children: ReactNode
  title: string
  content: string
}

const SimpleCard: React.VFC<Props> = (props) => {
  return (
    <>
      <Card>
        <div className='flex'>
          <div>
            <div className='p-3 mr-5 rounded-full bg-indigo-600 bg-opacity-75'>
              {props.children}
            </div>
          </div>
          <div>
            <h4 className='text-2xl font-semibold text-gray-700'>
              {props.content}
            </h4>
            <div className='text-gray-500'>{props.title}</div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default SimpleCard

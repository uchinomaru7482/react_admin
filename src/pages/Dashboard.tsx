import React from 'react'
import { BiUserPlus, BiYen } from 'react-icons/bi'
import SimpleCard from '../components/dashboard/SimpleCard'

const Dashboard: React.VFC = () => {
  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>Dashboard</h2>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <SimpleCard title='New User' content='3,306'>
            <BiUserPlus className='h-8 w-8 text-white' />
          </SimpleCard>
          <SimpleCard title='New Sales' content='2,560,000'>
            <BiYen className='h-8 w-8 text-white' />
          </SimpleCard>
        </div>
      </div>
    </>
  )
}

export default Dashboard

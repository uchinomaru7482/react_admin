import React from 'react'
import UserCreateForm from '../../components/organisms/UserCreateForm'

const UserCreate: React.VFC = React.memo(() => {
  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>UserCreate</h2>
        <div className='card'>
          <UserCreateForm />
        </div>
      </div>
    </>
  )
})

export default UserCreate

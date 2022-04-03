import React from 'react'

import Frame from '../../components/atoms/Frame'
import PageTitle from '../../components/atoms/PageTitle'
import Card from '../../components/atoms/Card'
import UserCreateForm from '../../components/organisms/UserCreateForm'

const UserCreate: React.VFC = React.memo(() => {
  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='UserCreate' />
        </div>
        <Card>
          <UserCreateForm />
        </Card>
      </Frame>
    </>
  )
})

export default UserCreate

import React from 'react'

import Frame from '../../components/atoms/Frame'
import PageTitle from '../../components/atoms/PageTitle'
import Card from '../../components/atoms/Card'
import UserListTable from '../../components/organisms/UserListTable'

const UserList: React.VFC = React.memo(() => {
  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='UserList' />
        </div>
        <Card>
          <UserListTable />
        </Card>
      </Frame>
    </>
  )
})

export default UserList

import React from 'react'

import Frame from '../../components/atoms/Frame'
import PageTitle from '../../components/atoms/PageTitle'
import Card from '../../components/atoms/Card'
import Button from '../../components/atoms/Button'
import UserListTable from '../../components/organisms/UserListTable'

const UserList: React.VFC = React.memo(() => {
  const tableData = {
    headers: ['ID', 'Name', 'Age', 'Edit'],
    contents: [
      ['1', 'Tanaka', '14'],
      ['2', 'Sato', '23'],
      ['3', 'Kato', '31']
    ]
  }
  const userDelete = () => {
    console.log('user delete')
  }
  const replace = {
    header: 'Edit',
    reactNode: (
      <Button label='Delete' type='Warn' size='' callback={userDelete} />
    )
  }
  const pagination = () => {
    console.log('pagination')
  }

  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='UserList' />
        </div>
        <Card>
          <UserListTable
            tableData={tableData}
            replace={replace}
            prevCallback={pagination}
            nextCallback={pagination}
          />
        </Card>
      </Frame>
    </>
  )
})

export default UserList

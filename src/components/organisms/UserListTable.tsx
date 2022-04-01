import React from 'react'

import Table from '../../components/molecules/Table'
import Button from '../atoms/Button'
import Pagination from '../molecules/Pagination'

const UserListTable: React.VFC = () => {
  const headers = ['ID', 'Name', 'Age', 'Edit']
  const userList = [
    ['1', 'Tanaka', '14'],
    ['2', 'Sato', '23'],
    ['3', 'Kato', '31']
  ]
  const userDelete = () => {
    console.log('user delete')
  }
  const replace = {
    header: 'Edit',
    reactNode: <Button label='Delete' type='Warn' callback={userDelete} />
  }
  const pagination = () => {
    console.log('pagination')
  }

  return (
    <>
      <div className='pb-5'>
        <Table headers={headers} contents={userList} replace={replace} />
      </div>
      <Pagination prevCallback={pagination} nextCallback={pagination} />
    </>
  )
}

export default UserListTable

import React, { ReactNode } from 'react'

import Button from '../atoms/Button'
import Table from '../molecules/Table'
import Pagination from '../molecules/Pagination'

type Props = {
  userList: { id: number; name: string; email: string; edit?: ReactNode }[]
  deleteCallback: (id: number) => void
  prevCallback: () => void
  nextCallback: () => void
}

const UserListTable: React.VFC<Props> = (props) => {
  props.userList.forEach((user) => {
    user.edit = (
      <Button
        label='Delete'
        type='Warn'
        size=''
        callback={() => props.deleteCallback(user.id)}
      />
    )
  })

  return (
    <>
      <div className='pb-5'>
        <Table tableData={props.userList} />
      </div>
      <Pagination
        prevCallback={props.prevCallback}
        nextCallback={props.nextCallback}
      />
    </>
  )
}

export default UserListTable

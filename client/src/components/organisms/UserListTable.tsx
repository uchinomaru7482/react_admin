import React, { ReactNode } from 'react'

import Table from '../../components/molecules/Table'
import Pagination from '../molecules/Pagination'

type Props = {
  headers: string[]
  userList: { id: number; name: string; email: string }[]
  replace?: { header: string; reactNode: ReactNode }
  prevCallback: () => void
  nextCallback: () => void
}

type User = {
  id: number
  name: string
  email: string
}

type TableData = {
  headers: string[]
  contents: string[][]
}

const UserListTable: React.VFC<Props> = (props) => {
  const tableData: TableData = {
    headers: props.headers,
    contents: []
  }
  props.userList.forEach((user) => {
    const row: string[] = []
    ;(Object.keys(user) as (keyof User)[]).forEach((key) => {
      row.push(String(user[key]))
    })
    tableData.contents.push(row)
  })
  return (
    <>
      <div className='pb-5'>
        <Table tableData={tableData} replace={props.replace} />
      </div>
      <Pagination
        prevCallback={props.prevCallback}
        nextCallback={props.nextCallback}
      />
    </>
  )
}

export default UserListTable

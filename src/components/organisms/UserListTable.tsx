import React, { ReactNode } from 'react'

import Table from '../../components/molecules/Table'
import Pagination from '../molecules/Pagination'

type Props = {
  tableData: {
    headers: string[]
    contents: string[][]
  }
  replace: { header: string; reactNode: ReactNode } | null
  prevCallback: () => void
  nextCallback: () => void
}

const UserListTable: React.VFC<Props> = (props) => {
  return (
    <>
      <div className='pb-5'>
        <Table tableData={props.tableData} replace={props.replace} />
      </div>
      <Pagination
        prevCallback={props.prevCallback}
        nextCallback={props.nextCallback}
      />
    </>
  )
}

export default UserListTable

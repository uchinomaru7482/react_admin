import React, { ReactNode } from 'react'

type Props = {
  data: string | number | ReactNode
}

const TableData: React.VFC<Props> = (props) => {
  return (
    <>
      <td className='px-5 py-3 text-sm text-left border-b border-gray-200'>
        <p>{props.data}</p>
      </td>
    </>
  )
}

export default TableData

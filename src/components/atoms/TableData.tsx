import React from 'react'

type Props = {
  text: string
}

const TableData: React.VFC<Props> = (props) => {
  return (
    <>
      <td className='px-5 py-3 text-sm text-left border-b border-gray-200'>
        <p>{props.text}</p>
      </td>
    </>
  )
}

export default TableData

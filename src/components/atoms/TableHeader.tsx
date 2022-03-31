import React from 'react'

type Props = {
  text: string
}

const TableHeader: React.VFC<Props> = (props) => {
  return (
    <>
      <th className='px-5 py-3 text-left text-sm font-bold text-gray-600 bg-gray-100 border-b-2 border-gray-200'>
        {props.text}
      </th>
    </>
  )
}

export default TableHeader

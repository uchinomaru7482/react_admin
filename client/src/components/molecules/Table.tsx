/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import TableHeader from '../atoms/TableHeader'
import TableData from '../atoms/TableData'
import filters from '../../utils/filter'

type Props = {
  tableData: { [key: string]: any }[]
}

const Table: React.VFC<Props> = (props) => {
  return (
    <>
      <table className='min-w-full'>
        <thead>
          <tr>
            {props.tableData.length !== 0 &&
              Object.keys(props.tableData[0]).map((key, index) => (
                <TableHeader text={filters.toUpperCamelCase(key)} key={index} />
              ))}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((data, index) => (
            <tr key={index}>
              {Object.keys(data).map((key, index) => (
                <TableData data={data[key]} key={index} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table

import React, { ReactNode } from 'react'

import TableHeader from '../atoms/TableHeader'
import TableData from '../../components/atoms/TableData'

type Props = {
  tableData: {
    headers: string[]
    contents: string[][]
  }
  replace: { header: string; reactNode: ReactNode } | null
}

const Table: React.VFC<Props> = (props) => {
  return (
    <>
      <table className='min-w-full'>
        <thead>
          <tr>
            {props.tableData.headers.map((header, index) => (
              <TableHeader text={header} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableData.contents.map((content, index) => (
            <tr key={index}>
              {props.tableData.headers.map((header, index) =>
                header === props.replace?.header ? (
                  <TableData data={props.replace.reactNode} key={index} />
                ) : (
                  <TableData data={content[index]} key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table

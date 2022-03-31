import React from 'react'

import TableHeader from '../atoms/TableHeader'
import TableData from '../atoms/TableData'

type User = {
  id: string
  name: string
  age: string
}

const UserListTable: React.VFC = () => {
  const headers = ['ID', 'Name', 'Age', 'Edit']
  const userList = [
    { id: 1, name: 'Tanaka', age: 14 },
    { id: 2, name: 'Sato', age: 23 },
    { id: 3, name: 'Kato', age: 31 },
    { id: 1, name: 'Tanaka', age: 14 },
    { id: 2, name: 'Sato', age: 23 },
    { id: 3, name: 'Kato', age: 31 },
    { id: 1, name: 'Tanaka', age: 14 },
    { id: 2, name: 'Sato', age: 23 },
    { id: 3, name: 'Kato', age: 31 }
  ]
  return (
    <>
      <table className='min-w-full'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeader text={header} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              {(Object.keys(user) as (keyof User)[]).map((key, index) => (
                <TableData text={String(user[key])} key={index} />
              ))}
              <td className='px-5 py-3 text-sm text-left border-b border-gray-200'>
                <button className='warn-button' type='button'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <div>
          <button className='mr-2'>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </>
  )
}

export default UserListTable

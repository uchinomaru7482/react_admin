import React from 'react'

const UserList: React.VFC = () => {
  const userList = [
    { id: 1, name: 'Tanaka', age: 14 },
    { id: 2, name: 'Sato', age: 23 },
    { id: 3, name: 'Kato', age: 31 }
  ]
  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>UserList</h2>
        <div className='py-4 overflow-x-auto'>
          <div className='wrap-table'>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <p>{user.id}</p>
                    </td>
                    <td>
                      <p>{user.name}</p>
                    </td>
                    <td>
                      <p>{user.age}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pagination'>
              <div>
                <button className='mr-2'>next</button>
                <button>prev</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList

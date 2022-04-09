import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Frame from '../../components/atoms/Frame'
import PageTitle from '../../components/atoms/PageTitle'
import Card from '../../components/atoms/Card'
import Button from '../../components/atoms/Button'
import UserListTable from '../../components/organisms/UserListTable'

type User = {
  id: number
  name: string
  email: string
}

const UserList: React.VFC = React.memo(() => {
  const headers = ['Id', 'Name', 'Email', 'Edit']
  const [userList, setUserList] = useState([] as User[])
  const updateUserList = (data: User[]) => setUserList(data)
  const userDelete = () => {
    console.log('user delete')
  }
  const replace = {
    header: 'Edit',
    reactNode: (
      <Button label='Delete' type='Warn' size='' callback={userDelete} />
    )
  }
  const pagination = () => {
    console.log('pagination')
  }

  useEffect(() => {
    console.log('fetch user list')
    const getUserList = async () => {
      try {
        const res = await axios.get('http://localhost:1323/user')
        updateUserList(res.data as User[])
      } catch (err) {
        console.log(err)
      }
    }
    getUserList()
  }, [])

  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='UserList' />
        </div>
        <Card>
          <UserListTable
            headers={headers}
            userList={userList}
            replace={replace}
            prevCallback={pagination}
            nextCallback={pagination}
          />
        </Card>
      </Frame>
    </>
  )
})

export default UserList

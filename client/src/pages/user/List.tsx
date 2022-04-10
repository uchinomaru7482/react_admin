import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import Frame from '../../components/atoms/Frame'
import PageTitle from '../../components/atoms/PageTitle'
import Card from '../../components/atoms/Card'
import UserListTable from '../../components/organisms/UserListTable'
import { ToastContext, ToastKind } from '../../contexts/ToastContext'

type User = {
  id: number
  name: string
  email: string
}

type GetUsersResponse = {
  users: User[]
  totalPage: number
}

const UserList: React.VFC = React.memo(() => {
  const [userList, setUserList] = useState([] as User[])
  const updateUserList = (data: User[]) => setUserList(data)
  const [totalPage, setTotalPage] = useState(0)
  const updateTotalPage = (data: number) => setTotalPage(data)
  const [currentPage, setCurrentPage] = useState(1)
  const nextCurrentPage = () => setCurrentPage(currentPage + 1)
  const prevCurrentPage = () => setCurrentPage(currentPage - 1)
  const toast = useContext(ToastContext)

  const getUserList = async (page: number) => {
    try {
      const res = await axios.get(`http://localhost:1323/users/${page}`)
      const data = res.data as GetUsersResponse
      updateUserList(data.users)
      updateTotalPage(data.totalPage)
    } catch (err) {
      console.log(err)
    }
  }

  const userDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:1323/user/${id}`)
      await getUserList(currentPage)
    } catch (err) {
      console.log(err)
    }
  }

  const nextPage = () => {
    if (currentPage >= totalPage) {
      toast.addToast(ToastKind.Error)
      return
    }
    nextCurrentPage()
    getUserList(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage <= 1) {
      toast.addToast(ToastKind.Error)
      return
    }
    prevCurrentPage()
    getUserList(currentPage - 1)
  }

  useEffect(() => {
    getUserList(currentPage)
  }, [])

  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='UserList' />
        </div>
        <Card>
          <UserListTable
            userList={userList}
            deleteCallback={userDelete}
            prevCallback={prevPage}
            nextCallback={nextPage}
          />
        </Card>
      </Frame>
    </>
  )
})

export default UserList

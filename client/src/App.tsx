import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/organisms/Header'
import Sidebar from './components/organisms/Sidebar'
import ToastProvider from './contexts/ToastContext'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import UserList from './pages/user/List'
import UserCreate from './pages/user/Create'

const App: React.VFC = () => {
  const navigate = useNavigate()
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const toggleIsOpenSidebar = () => setIsOpenSidebar(!isOpenSidebar)
  const [isAuth, setIsAuth] = useState(false)
  const signin = () => setIsAuth(true)
  const signout = () => setIsAuth(false)

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [])

  if (isAuth) {
    return (
      <div className='App flex h-screen bg-gray-200'>
        <ToastProvider>
          <div
            onClick={toggleIsOpenSidebar}
            className={`${
              isOpenSidebar ? 'block' : 'hidden'
            } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}
          />
          <Sidebar isOpenSidebar={isOpenSidebar} />
          <div className='flex-1 overflow-hidden'>
            <Header
              toggleIsOpenSidebar={toggleIsOpenSidebar}
              signout={signout}
            />
            <div className='h-full overflow-scroll'>
              <Routes>
                <Route path='/signin' element={<Signin signin={signin} />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/user/list' element={<UserList />} />
                <Route path='/user/create' element={<UserCreate />} />
              </Routes>
            </div>
          </div>
        </ToastProvider>
      </div>
    )
  } else {
    return (
      <div className='App flex items-center h-screen bg-gray-200'>
        <Routes>
          <Route path='/signin' element={<Signin signin={signin} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    )
  }
}

export default App

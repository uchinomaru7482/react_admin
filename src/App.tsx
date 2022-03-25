import React, { useState, useEffect, useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import UserList from './pages/user/List'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Toast from './components/Toast'

type SettingContextType = {
  addToast: (kind: string) => void
  removeToast: (indexNum: number) => void
}

export const SettingContext = React.createContext<SettingContextType>(
  {} as {
    addToast: (kind: string) => void
    removeToast: (indexNum: number) => void
  }
)

export enum ToastKind {
  Success = 'Success',
  Error = 'Error'
}

type ToastType = {
  kind: string
  timeoutNum: NodeJS.Timeout | null
}

const App: React.VFC = () => {
  const navigate = useNavigate()
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const toggleIsOpenSidebar = () => setIsOpenSidebar(!isOpenSidebar)
  const [isAuth, setIsAuth] = useState(false)
  const signin = () => setIsAuth(true)
  const signout = () => setIsAuth(false)

  const reducer = (state: Array<ToastType>, action: ToastType) => {
    const newState = state.slice()
    switch (action.kind) {
      case 'Success':
        newState.unshift({
          kind: ToastKind.Success,
          timeoutNum: action.timeoutNum
        })
        break
      case 'Error':
        newState.unshift({
          kind: ToastKind.Error,
          timeoutNum: action.timeoutNum
        })
        break
      case 'Remove':
        newState.pop()
        break
      case 'RemoveWithTimeoutNum':
        newState.forEach((toast, index) => {
          if (toast.timeoutNum === action.timeoutNum) {
            newState.splice(index, 1)
          }
        })
        break
    }
    return newState
  }
  const [state, dispatch] = useReducer(reducer, [])

  const addToast = (kind: string) => {
    if (kind === ToastKind.Success) {
      const timeoutNum = setTimeout(
        () => dispatch({ kind: 'Remove', timeoutNum: null }),
        4000
      )
      dispatch({ kind: 'Success', timeoutNum: timeoutNum })
    } else if (kind === ToastKind.Error) {
      const timeoutNum = setTimeout(
        () => dispatch({ kind: 'Remove', timeoutNum: null }),
        4000
      )
      dispatch({ kind: 'Error', timeoutNum: timeoutNum })
    }
  }

  const removeToast = (indexNum: number) => {
    const timeoutNum = state[indexNum].timeoutNum
    if (timeoutNum) {
      clearTimeout(timeoutNum)
    }
    dispatch({ kind: 'RemoveWithTimeoutNum', timeoutNum: timeoutNum })
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [])

  if (isAuth) {
    return (
      <div className='App flex h-screen bg-gray-200'>
        <SettingContext.Provider value={{ addToast, removeToast }}>
          <div
            onClick={toggleIsOpenSidebar}
            className={
              (isOpenSidebar ? 'block' : 'hidden') +
              ' fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden'
            }
          />
          <Sidebar isOpenSidebar={isOpenSidebar} />
          <div className='flex-1 flex-col overflow-hidden'>
            <Header
              toggleIsOpenSidebar={toggleIsOpenSidebar}
              signout={signout}
            />

            <Routes>
              <Route path='/signin' element={<Signin signin={signin} />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/user/list' element={<UserList />} />
            </Routes>
          </div>
          <div className='absolute top-0 right-0 z-10 m-5'>
            {state.map((toast, index) => (
              <Toast key={index} toastType={toast.kind} indexNum={index} />
            ))}
          </div>
        </SettingContext.Provider>
      </div>
    )
  } else {
    return (
      <div className='App flex items-center h-screen bg-gray-200'>
        <Routes>
          <Route path='/signin' element={<Signin signin={signin} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user/list' element={<UserList />} />
        </Routes>
      </div>
    )
  }
}

export default App

import React, { useReducer, ReactNode } from 'react'

import Toast from '../components/Toast'

type ToastContext = {
  addToast: (kind: string) => void
  removeToast: (indexNum: number) => void
}

type Toast = {
  kind: string
  timeoutNum: NodeJS.Timeout | null
}

type Props = {
  children: ReactNode
}

export const ToastContext = React.createContext<ToastContext>(
  {} as {
    addToast: (kind: string) => void
    removeToast: (indexNum: number) => void
  }
)

export enum ToastKind {
  Success = 'Success',
  Error = 'Error'
}

const ToastProvider: React.VFC<Props> = ({ children }) => {
  const reducer = (state: Array<Toast>, action: Toast) => {
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

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className='absolute top-0 right-0 z-10 m-5'>
        {state.map((toast, index) => (
          <Toast key={index} toastType={toast.kind} indexNum={index} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider

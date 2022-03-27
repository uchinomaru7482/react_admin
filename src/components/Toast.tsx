import React, { useContext } from 'react'
import { BiBell, BiX } from 'react-icons/bi'

import { ToastContext, ToastKind } from '../contexts/ToastContext'

type Props = {
  toastType: string
  indexNum: number
}

const Toast: React.VFC<Props> = (props) => {
  let content = ''
  let border = ''
  let bg = ''
  let text = ''
  if (props.toastType === ToastKind.Success) {
    content = 'Execution completed.'
    border = 'border-indigo-300'
    bg = 'bg-indigo-100'
    text = 'text-indigo-700'
  } else if (props.toastType === ToastKind.Error) {
    content = 'Error has occurred.'
    border = 'border-pink-300'
    bg = 'bg-pink-100'
    text = 'text-pink-700'
  }
  const toast = useContext(ToastContext)
  const removeToast = () => toast.removeToast(props.indexNum)

  return (
    <>
      <div className='toast'>
        <div
          className={`${border} shadow-lg w-96 max-w-full text-sm rounded-lg block border`}
        >
          <div
            className={`${border} ${bg} flex justify-between items-center py-2 px-3 border-b rounded-t-lg`}
          >
            <p className={`${text} font-bold flex items-center`}>
              <BiBell className='h-5 w-5 mr-2' />
              {props.toastType}
            </p>
            <button
              type='button'
              onClick={removeToast}
              className={`${text} w-5 h-5 ml-2 opacity-50 focus:opacity-100 hover:opacity-75`}
            >
              <BiX className='h-5 w-5' />
            </button>
          </div>
          <div className={`${bg} ${text} px-3 py-4 rounded-b-lg break-words`}>
            {content}
          </div>
        </div>
      </div>
    </>
  )
}

export default Toast

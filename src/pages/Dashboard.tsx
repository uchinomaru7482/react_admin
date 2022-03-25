import React, { useRef, useContext } from 'react'
import Modal from '../components/Modal'
import { ToastContext, ToastKind } from '../contexts/ToastContext'

interface Handler {
  showModal(): void
}

const Dashboard: React.VFC = () => {
  const childRef = useRef({} as Handler)
  const toast = useContext(ToastContext)

  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>Dashboard</h2>
        <Modal
          title='Title'
          body='Body'
          callback={() => console.log('callback')}
          ref={childRef}
        />
        <button onClick={() => childRef.current.showModal()}>
          Display Modal
        </button>
        <div>
          <button onClick={() => toast.addToast(ToastKind.Success)}>
            Success
          </button>
        </div>
        <div>
          <button onClick={() => toast.addToast(ToastKind.Error)}>Error</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard

import React, { useRef, useContext } from 'react'
import Modal from '../components/Modal'
import { SettingContext, ToastKind } from '../App'

interface Handler {
  showModal(): void
}

const Dashboard: React.VFC = () => {
  const childRef = useRef({} as Handler)
  const setting = useContext(SettingContext)

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
          <button onClick={() => setting.addToast(ToastKind.Success)}>
            Success
          </button>
        </div>
        <div>
          <button onClick={() => setting.addToast(ToastKind.Error)}>
            Error
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard

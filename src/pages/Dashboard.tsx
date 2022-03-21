import React, { useRef } from 'react'
import Modal from '../components/Modal'

interface Handler {
  showModal(): void
}

const Dashboard: React.VFC = () => {
  const childRef = useRef({} as Handler)

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
      </div>
    </>
  )
}

export default Dashboard

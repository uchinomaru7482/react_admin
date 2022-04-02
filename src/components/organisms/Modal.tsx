import { useImperativeHandle, forwardRef, useState } from 'react'
import { BiBell } from 'react-icons/bi'

import Button from '../atoms/Button'

type Handler = {
  showModal(): void
}

type Props = {
  title: string
  body: string
  callback: () => void
}

const Modal = forwardRef<Handler, Props>(function Modal(props, ref) {
  const [isShowModal, setIsShowModal] = useState(false)
  useImperativeHandle(ref, () => ({
    showModal: () => {
      setIsShowModal(true)
    }
  }))
  const submit = () => {
    props.callback()
    setIsShowModal(false)
  }
  const closeModal = () => {
    setIsShowModal(false)
  }

  return (
    <>
      {isShowModal && (
        <div>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75' />
          <div className='fixed inset-0 m-auto h-fit rounded-lg overflow-hidden max-w-xs sm:max-w-lg sm:w-full'>
            <div className='bg-white p-5 sm:flex'>
              <div className='mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 sm:mx-0'>
                <BiBell className='h-6 w-6 text-indigo-500' />
              </div>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3 className='mb-2 text-lg font-medium text-gray-900'>
                  {props.title}
                </h3>
                <p className='text-sm text-gray-500'>{props.body}</p>
              </div>
            </div>
            <div className='bg-gray-50 px-5 py-3 sm:flex sm:justify-end'>
              <div className='pb-3 sm:pb-0 sm:pr-3'>
                <Button
                  label='Submit'
                  type='Submit'
                  size='full'
                  callback={submit}
                />
              </div>
              <div>
                <Button
                  label='Cancel'
                  type='Nomal'
                  size='full'
                  callback={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

export default Modal

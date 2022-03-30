import { useImperativeHandle, forwardRef, useState } from 'react'
import { BiBell } from 'react-icons/bi'

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
        <div className='fixed z-10 inset-0 overflow-y-auto flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' />
          <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:flex sm:items-start'>
              <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10'>
                <BiBell className='h-6 w-6 text-indigo-500' />
              </div>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900'
                  id='modal-title'
                >
                  {props.title}
                </h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>{props.body}</p>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                onClick={submit}
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Submit
              </button>
              <button
                type='button'
                onClick={closeModal}
                className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

export default Modal

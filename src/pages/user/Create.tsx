import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Modal from '../../components/Modal'
import { ToastContext, ToastKind } from '../../contexts/ToastContext'

type FormInput = {
  name: string
  age: number
  password: string
}

type Handler = {
  showModal(): void
}

const schema = yup.object({
  name: yup.string().required().max(20),
  age: yup.number().required().min(0).max(150),
  password: yup.string().required().max(40)
})

const UserCreate: React.VFC = React.memo(() => {
  const navigate = useNavigate()
  const childRef = useRef({} as Handler)
  const toast = useContext(ToastContext)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormInput>({ resolver: yupResolver(schema) })

  const create = () => {
    const data = getValues()
    // TODO:ユーザデータ登録処理
    console.log(data)
    toast.addToast(ToastKind.Success)
    navigate('/user/list')
  }

  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>UserCreate</h2>
        <div className='card'>
          <form onSubmit={handleSubmit(() => childRef.current.showModal())}>
            <div className='card-body'>
              <div>
                <label>Name</label>
                <input
                  className='form-input'
                  type='text'
                  {...register('name')}
                />
                <p className='form-err-msg'>{errors.name?.message}</p>
              </div>
              <div>
                <label>Age</label>
                <input
                  className='form-input'
                  type='number'
                  {...register('age')}
                />
                <p className='form-err-msg'>{errors.age?.message}</p>
              </div>
              <div>
                <label>Password</label>
                <input
                  className='form-input'
                  type='password'
                  {...register('password')}
                />
                <p className='form-err-msg'>{errors.password?.message}</p>
              </div>
            </div>
            <div className='card-action'>
              <button className='form-submit' type='submit'>
                Create
              </button>
            </div>
          </form>
        </div>
        <Modal
          title='Confirm'
          body='Do you want to create a user?'
          callback={create}
          ref={childRef}
        />
      </div>
    </>
  )
})

export default UserCreate

import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Modal from '../../components/organisms/Modal'
import Button from '../../components/atoms/Button'
import FormInput from '../../components/atoms/FormInput'
import FormInputError from '../../components/atoms/FormInputError'
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
  /* const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormInput>({ resolver: yupResolver(schema) }) */

  const methods = useForm<FormInput>({ resolver: yupResolver(schema) })

  const create = () => {
    const data = methods.getValues()
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
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(() =>
                childRef.current.showModal()
              )}
            >
              <div className='card-body'>
                <div>
                  <label>Name</label>
                  <FormInput label='name' type='text' />
                  <FormInputError
                    errorMessage={methods.formState.errors.name?.message}
                  />
                </div>
                <div>
                  <label>Age</label>
                  <FormInput label='age' type='number' />
                  <FormInputError
                    errorMessage={methods.formState.errors.age?.message}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <FormInput label='password' type='password' />
                  <FormInputError
                    errorMessage={methods.formState.errors.password?.message}
                  />
                </div>
              </div>
              <div className='flex justify-end mt-4'>
                <Button label='Create' />
              </div>
            </form>
          </FormProvider>
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

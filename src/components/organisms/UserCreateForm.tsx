import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Modal from '../../components/organisms/Modal'
import FormButton from '../atoms/FormButton'
import FormInput from '../../components/atoms/FormInput'
import InputForm from '../../components/molecules/InputForm'
import { ToastContext, ToastKind } from '../../contexts/ToastContext'

type FormInput = {
  name: string
  age: number
  password: string
}

type Handler = {
  showModal(): void
}

type InputFormContent = {
  label: 'name' | 'age' | 'password'
  type: string
}[]

const schema = yup.object({
  name: yup.string().required().max(20),
  age: yup.number().required().min(0).max(150),
  password: yup.string().required().max(40)
})

const UserCreateForm: React.VFC = () => {
  const navigate = useNavigate()
  const childRef = useRef({} as Handler)
  const toast = useContext(ToastContext)
  const methods = useForm<FormInput>({ resolver: yupResolver(schema) })
  const inputFormContent: InputFormContent = [
    { label: 'name', type: 'text' },
    { label: 'age', type: 'number' },
    { label: 'password', type: 'password' }
  ]

  const create = () => {
    const data = methods.getValues()
    // TODO:ユーザデータ登録処理
    console.log(data)
    toast.addToast(ToastKind.Success)
    navigate('/user/list')
  }

  const showModal = () => {
    childRef.current.showModal()
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(showModal)}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
            {inputFormContent.map((content, index) => (
              <div key={index}>
                <InputForm
                  label={content.label}
                  type={content.type}
                  errorMessage={
                    methods.formState.errors[content.label]?.message
                  }
                />
              </div>
            ))}
          </div>
          <div className='flex justify-end mt-4'>
            <FormButton label='Create' />
          </div>
        </form>
      </FormProvider>
      <Modal
        title='Confirm'
        body='Do you want to create a user?'
        callback={create}
        ref={childRef}
      />
    </>
  )
}

export default UserCreateForm

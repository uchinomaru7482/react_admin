import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormButton from '../atoms/FormButton'
import FormInput from '../../components/atoms/FormInput'
import InputForm from '../../components/molecules/InputForm'

type Props = {
  signin: () => void
}

type FormInput = {
  mailAddress: string
  password: string
}

type InputFormContent = {
  label: 'mailAddress' | 'password'
  type: string
}[]

const schema = yup.object({
  mailAddress: yup.string().email().required().max(40),
  password: yup.string().required().max(40)
})

const SigninForm: React.VFC<Props> = (props) => {
  const navigate = useNavigate()
  const methods = useForm<FormInput>({ resolver: yupResolver(schema) })
  const inputFormContent: InputFormContent = [
    { label: 'mailAddress', type: 'text' },
    { label: 'password', type: 'password' }
  ]

  const signin = (data: FormInput) => {
    if (
      data.mailAddress === 'admin@example.com' &&
      data.password === 'administrator'
    ) {
      props.signin()
      navigate('/dashboard')
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(signin)}>
          {inputFormContent.map((content, index) => (
            <div key={index} className='pb-6'>
              <InputForm
                label={content.label}
                type={content.type}
                errorMessage={methods.formState.errors[content.label]?.message}
              />
            </div>
          ))}
          <div className='pt-6'>
            <FormButton label='Signin' size='full' />
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default SigninForm

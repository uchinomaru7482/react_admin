import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiWrench } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {
  signin: () => void
}

type IFormInputs = {
  mailAddress: string
  password: string
}

const schema = yup.object({
  mailAddress: yup.string().email().required().max(40),
  password: yup.string().required().max(40)
})

const Signin: React.VFC<Props> = (props) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) })
  const signin = (data: IFormInputs) => {
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
      <div className='mx-auto'>
        <div className='text-center'>
          <BiWrench className='inline-block w-16 h-16 pb-5 pr-5' />
          <h2 className='text-4xl text-center text-gray-700 font-medium inline-block pr-5'>
            React Admin
          </h2>
        </div>
        <div className='bg-white rounded-md shadow-md w-96 p-10 mx-auto'>
          <form onSubmit={handleSubmit(signin)}>
            <div className='mb-5'>
              <label className='block text-left text-gray-700'>
                Mail Address
              </label>
              <input className='form-input' {...register('mailAddress')} />
              <p className='form-err-msg'>{errors.mailAddress?.message}</p>
            </div>
            <div className='mb-11'>
              <label className='block text-left text-gray-700'>Password</label>
              <input
                className='form-input'
                type='password'
                {...register('password')}
              />
              <p className='form-err-msg'>{errors.password?.message}</p>
            </div>
            <button className='form-submit w-full' type='submit'>
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin

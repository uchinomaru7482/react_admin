import React from 'react'
import { BiWrench } from 'react-icons/bi'

import Card from '../components/atoms/Card'
import SigninForm from '../components/organisms/SigninForm'

type Props = {
  signin: () => void
}

const Signin: React.VFC<Props> = (props) => {
  return (
    <>
      <div className='mx-auto'>
        <div className='text-center'>
          <BiWrench className='inline-block w-16 h-16 pb-5 pr-5' />
          <h1 className='text-4xl text-gray-700 font-medium inline-block'>
            React Admin
          </h1>
        </div>
        <Card>
          <div className='p-5 w-80'>
            <SigninForm signin={props.signin} />
          </div>
        </Card>
      </div>
    </>
  )
}

export default Signin

import React from 'react'

import Button from '../atoms/Button'

type Props = {
  prevCallback: () => void
  nextCallback: () => void
}

const Pagination: React.VFC<Props> = (props) => {
  return (
    <>
      <div className='w-40 mx-auto grid grid-cols-2 gap-4'>
        <Button label='Prev' type='Nomal' callback={props.prevCallback} />
        <Button label='Next' type='Nomal' callback={props.nextCallback} />
      </div>
    </>
  )
}

export default Pagination

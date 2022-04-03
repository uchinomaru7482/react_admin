import { render } from '@testing-library/react'

import Toast from '../../../components/organisms/Toast'

describe('Rendering', () => {
  test('Toast snap shot test', () => {
    const { asFragment } = render(<Toast toastType='Success' indexNum={1} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Toast type Success', () => {
    const { container } = render(<Toast toastType='Success' indexNum={1} />)
    expect(container.innerHTML).toMatch('Execution completed.')
    expect(
      container.getElementsByClassName('border-indigo-300').length
    ).toEqual(2)
  })

  test('Toast type Error', () => {
    const { container } = render(<Toast toastType='Error' indexNum={1} />)
    expect(container.innerHTML).toMatch('Error has occurred.')
    expect(container.getElementsByClassName('border-pink-300').length).toEqual(
      2
    )
  })
})

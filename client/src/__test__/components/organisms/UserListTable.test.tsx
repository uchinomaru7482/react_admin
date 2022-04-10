import { render, fireEvent } from '@testing-library/react'

import UserListTable from '../../../components/organisms/UserListTable'

describe('User list table test', () => {
  const deleteCallback = jest.fn()
  const prevCallback = jest.fn()
  const nextCallback = jest.fn()

  const userList = [
    { id: 1, name: 'Tanaka', email: 'tanaka@example.com' },
    { id: 2, name: 'Sato', email: 'sato@example.com' },
    { id: 3, name: 'Kato', email: 'kato@example.com' }
  ]

  test('User list table rendering', () => {
    const { container } = render(
      <UserListTable
        userList={userList}
        deleteCallback={deleteCallback}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
      />
    )
    expect(container.innerHTML).toMatch('Id')
    expect(container.innerHTML).toMatch('1')
    expect(container.innerHTML).toMatch('tanaka@example.com')
    expect(container.innerHTML).toMatch('Edit')
  })

  test('User list table click delete button', () => {
    const { getAllByText } = render(
      <UserListTable
        userList={userList}
        deleteCallback={deleteCallback}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
      />
    )
    const deleteButton = getAllByText('Delete')
    fireEvent.click(deleteButton[0])
    expect(deleteCallback).toHaveBeenCalledTimes(1)
  })

  test('User list table click pagination', () => {
    const { getByText } = render(
      <UserListTable
        userList={userList}
        deleteCallback={deleteCallback}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
      />
    )
    const prevButton = getByText('Prev')
    const nextButton = getByText('Next')
    fireEvent.click(prevButton)
    fireEvent.click(nextButton)
    expect(prevCallback).toHaveBeenCalledTimes(1)
    expect(nextCallback).toHaveBeenCalledTimes(1)
  })
})

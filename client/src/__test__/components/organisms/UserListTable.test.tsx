import { render, fireEvent } from '@testing-library/react'

import Button from '../../../components/atoms/Button'
import UserListTable from '../../../components/organisms/UserListTable'

describe('User list table test', () => {
  const deleteCallback = jest.fn()
  const prevCallback = jest.fn()
  const nextCallback = jest.fn()
  const tableData = {
    headers: ['ID', 'Name', 'Age', 'Edit'],
    contents: [
      ['1', 'Tanaka', '14'],
      ['2', 'Sato', '23'],
      ['3', 'Kato', '31']
    ]
  }
  const replace = {
    header: 'Edit',
    reactNode: (
      <Button label='Delete' type='Warn' size='' callback={deleteCallback} />
    )
  }

  test('User list table rendering', () => {
    const { container } = render(
      <UserListTable
        tableData={tableData}
        replace={replace}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
      />
    )
    expect(container.innerHTML).toMatch('ID')
    expect(container.innerHTML).toMatch('1')
    expect(container.innerHTML).toMatch('Tanaka')
    expect(container.innerHTML).toMatch('14')
  })

  test('User list table click delete button', () => {
    const { getAllByText } = render(
      <UserListTable
        tableData={tableData}
        replace={replace}
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
        tableData={tableData}
        replace={replace}
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

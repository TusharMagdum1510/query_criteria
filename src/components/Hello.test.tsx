import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('renders Hello component with name prop', () => {
  render(<Hello name="World" />)
  const headingElement = screen.getByText(/Hello, World!/i)
  expect(headingElement).toBeInTheDocument()
})

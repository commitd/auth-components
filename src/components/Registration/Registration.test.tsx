import React from 'react'
import { render } from '../../setupTests'
import { Primary } from './Registration.stories'

it('renders story', () => {
  const { asFragment } = render(<Primary />)
  expect(asFragment()).toMatchSnapshot()
})

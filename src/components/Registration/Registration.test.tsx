import React from 'react'
import { render } from '../../setupTests'
import { Default } from './Registration.stories'

it('renders story', () => {
  const { asFragment } = render(<Default />)
  expect(asFragment()).toMatchSnapshot()
})

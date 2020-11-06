import React from 'react'
import { render } from '../../setupTests'
import { Default } from './Login.stories'

it('renders story', () => {
  const { asFragment } = render(<Default />)
  expect(asFragment()).toMatchSnapshot()
})

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Login, LoginProps } from '.'
import { Box } from '@committed/components'

export default {
  title: 'Components/Login',
  component: Login,
} as Meta

export const Default: React.FC = () => {
  return (
    <Box p={3} bgcolor="background.paper">
      <Login
        onChangeEmail={() => {}}
        onChangePassword={() => {}}
        email="jsmith"
        password="password"
        onSignIn={() => {}}
      />
    </Box>
  )
}

const Template: Story<LoginProps> = (args) => <Login {...args} />

export const Primary = Template.bind({})
Primary.args = {}

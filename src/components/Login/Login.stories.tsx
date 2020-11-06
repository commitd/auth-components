import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Login, LoginProps } from '.'
import { ThemeProvider } from '@committed/components'

export default {
  title: 'Components/Login',
  component: Login,
} as Meta

export const Default: React.FC = () => {
  return (
    <ThemeProvider>
      <Login
        onChangeEmail={() => {}}
        onChangePassword={() => {}}
        email="jsmith"
        password="password"
        onSignIn={() => {}}
      />
    </ThemeProvider>
  )
}

const Template: Story<LoginProps> = (args) => (
  <ThemeProvider>
    <Login {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {}

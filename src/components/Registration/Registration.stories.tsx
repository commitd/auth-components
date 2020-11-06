import React from 'react'
import { Meta } from '@storybook/react'
import { Registration } from '.'
import { ThemeProvider } from '@committed/components'

export default {
  title: 'Components/Registration',
  component: Registration,
} as Meta

export const Default: React.FC = () => {
  return (
    <ThemeProvider>
      <Registration
        onSignUp={() => {}}
        email=""
        password=""
        confirmPassword=""
        onChangeEmail={() => {}}
        onChangePassword={() => {}}
        onChangeConfirmPassword={() => {}}
      />
    </ThemeProvider>
  )
}

export const ErrorMessage = () => (
  <ThemeProvider>
    <Registration
      onSignUp={() => {}}
      email=""
      password=""
      confirmPassword=""
      onChangeEmail={() => {}}
      onChangePassword={() => {}}
      onChangeConfirmPassword={() => {}}
      errorMessage="Username already exists"
    />
  </ThemeProvider>
)

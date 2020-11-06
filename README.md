<h1 align="center"> Committed Auth Components </h1>
<br>
<p align="center">
  <img src="https://committed.software/Logo.svg" width="128px" alt="Project Logo"/>
</p>
<p align="center">
  Committed Auth Components
</p>

[![Committed Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fcommitted.software%2Fbadge)](https://committed.io)
[![Build Status](https://drone.committed.software/api/badges/commitd/auth-components/status.svg)](https://drone.committed.software/commitd/auth-components)
![GitHub repo size](https://img.shields.io/github/repo-size/commitd/auth-components)

React components commonly needed for authentication.

This project was bootstrapped with TSDX.

## Getting Started

Install the library from npm. Committed Components and Material UI should also be installed if they have not been already:

```
# yarn
# install these if you don't have them already
yarn add @material-ui/core @material-ui/icons @material-ui/lab @committed/auth-components
yarn add @committed/auth-components

# npm
# install these if you don't have them already (npm 7+ will install them for you)
npm install --save @material-ui/core @material-ui/icons @material-ui/lab @committed/auth-components
npm install --save @committed/components
```

## Login Component

A login form following [best practices](web.dev/sign-in-form-best-practices/#checklist).

It uses built in browser validation of emails and passwords with `type="email"` and `type="password"`.

The sign in button is disabled while sign in is taking place to prevent accidental multiple login attempts.

The form is mobile friendly. `type=email` is used to bring up the correct keyboard.

The typed in password can viewed with the show password button to make sign in easier.

Accessibility is considered. `aria-label` and `aria-describedby` is used for password inputs.

```
import React from 'react'
import { Login } from '@committed/auth-components'
import { ThemeProvider } from '@committed/components'

export const MyLoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <ThemeProvider>
      <Login
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        email={email}
        password={password}
        onSignIn={() => {
          # make a call using email and password e.g.
          # login(username, password)
        }}
      />
    </ThemeProvider>
  )
}
```

The `passwordRules` prop optionally displays the password rules for easier sign in.

The `errorMessage` prop can be used to display errors related to sign in.

## Registration Component

```
import React from 'react'
import { Login } from '@committed/auth-components'
import { ThemeProvider } from '@committed/components'

export const MyRegistrationPage: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  return (
    <ThemeProvider>
      <Registration
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        onChangeConfirmPassword={(e) => setConfirmPassword(e.target.value)}
        onSignUp={() => {
          if (password === confirmPassword) {
            # make a call using email and password e.g.
            # registerUser(username, password)
          }
        }}
      />
    </ThemeProvider>
  )
}
```

## Developing

See [development](./DEV).

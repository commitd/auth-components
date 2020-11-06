import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Login, Registration } from '../src'
import { ThemeProvider, Box, Heading, Container } from '@committed/components'

const MyLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <Login
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      email={email}
      password={password}
      onSignIn={() => console.log('Signing in')}
    />
  )
}

export const MyRegistration: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  return (
    <Registration
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      onChangeConfirmPassword={(e) => setConfirmPassword(e.target.value)}
      onSignUp={() => {
        if (password === confirmPassword) {
          console.log('Register user')
        }
      }}
    />
  )
}

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Container maxWidth="sm">
        <Heading.h3 mt={2} mb={2}>
          Login
        </Heading.h3>
        <Box mb={3}>
          <MyLogin />
        </Box>
        <Heading.h3 mt={2} mb={2}>
          Register
        </Heading.h3>
        <Box mb={3}>
          <MyRegistration />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

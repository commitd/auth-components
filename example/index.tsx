import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Login } from '../src'

const App = () => {
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

ReactDOM.render(<App />, document.getElementById('root'))

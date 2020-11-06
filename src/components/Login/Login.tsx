import {
  Box,
  Button,
  Container,
  Form,
  Flex,
  IconButton,
  InputAdornment,
  Text,
  Typography,
  Alert,
} from '@committed/components'
import { TextField } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'
import { VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'

export interface LoginProps {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
  errorMessage?: string
  onSignIn: () => void
  passwordRules?: string
  submitting?: boolean
}

export const Login: React.FC<LoginProps> = ({
  errorMessage,
  onChangeEmail,
  onChangePassword,
  email,
  password,
  onSignIn,
  passwordRules,
  submitting,
  children,
}) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <Container component="main" maxWidth="sm">
      <Flex alignItems="center" flexDirection="column">
        {children}
        {errorMessage != null && errorMessage.length > 0 ? (
          <Box mb={3}>
            <Alert severity="error">
              <Text>{errorMessage}</Text>
            </Alert>
          </Box>
        ) : undefined}
        <Form
          width={1}
          onSubmit={(e): void => {
            e.preventDefault()
            onSignIn()
          }}
        >
          <Box mb={3}>
            <TextField
              fullWidth
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={onChangeEmail}
              variant="outlined"
            />
          </Box>

          <Box mb={1}>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              type={hidePassword ? 'password' : 'text'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChangePassword}
              aria-describedby="password-contraints"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={(): void => setHidePassword((v) => !v)}
                      edge="end"
                    >
                      {hidePassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {passwordRules != null && passwordRules.length > 0 ? (
            <Box id="password-contraints">
              <Typography variant="caption"> {passwordRules}</Typography>
            </Box>
          ) : undefined}
          <Button
            mt={3}
            color="primary"
            fullWidth
            type="submit"
            disabled={submitting}
          >
            Sign In
          </Button>
        </Form>
      </Flex>
    </Container>
  )
}

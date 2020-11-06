import React from 'react'
import {
  Container,
  Flex,
  Text,
  TextField,
  Button,
  Form,
  Box,
  Alert,
} from '@committed/components'

export interface RegistrationProps {
  onSignUp: () => void
  errorMessage?: string
  email: string
  password: string
  confirmPassword: string
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  emailError?: boolean
  passwordError?: boolean
  submitting?: boolean
}

export const Registration: React.FC<RegistrationProps> = ({
  errorMessage,
  onSignUp,
  email,
  password,
  confirmPassword,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  emailError,
  passwordError,
  submitting,
  children,
}) => {
  return (
    <Container maxWidth="sm">
      <Flex flexDirection="column" alignItems="center">
        {children}
        {errorMessage != null && errorMessage.length > 0 ? (
          <Box mb={3}>
            <Alert severity="error">
              <Text>{errorMessage}</Text>
            </Alert>
          </Box>
        ) : undefined}
        <Form width={1}>
          <Flex flexDirection="column">
            <TextField
              mb={3}
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onChangeEmail}
              error={emailError}
            />
            <TextField
              mb={3}
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChangePassword}
              error={passwordError}
            />
            <TextField
              mb={3}
              required
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              error={passwordError}
            />
            <Button
              disabled={submitting}
              mb={1}
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSignUp}
              type="submit"
            >
              Sign Up
            </Button>
          </Flex>
        </Form>
      </Flex>
    </Container>
  )
}

import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from '../components/Login'

function LoginContainer() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <Login />
    </GoogleOAuthProvider>
  )
}

export default LoginContainer
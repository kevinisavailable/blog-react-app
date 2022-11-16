import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
    <button type="button" className="btn btn-outline-light me-2"  onClick={() => loginWithRedirect()}>Login</button>
    </>
  )
}

export default Login
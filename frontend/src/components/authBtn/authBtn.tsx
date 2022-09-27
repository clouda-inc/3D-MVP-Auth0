import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import * as Styles from './authBtn.module.css'

const AuthBtn = () => {
  const { isAuthenticated, loginWithRedirect,logout} = useAuth0()
  if (isAuthenticated) {
    return (
      <button className={Styles.authBtn} onClick={()=>logout()}>Logout</button>
    )
  } else {
    return (
      <button className={Styles.authBtn} onClick={loginWithRedirect}>Login</button>
    )
  }
}

export default AuthBtn
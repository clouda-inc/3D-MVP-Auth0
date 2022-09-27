import React from 'react'
import { useAuth0, withAuthenticationRequired, Auth0Provider } from '@auth0/auth0-react'
import {
  Auth0Client,
  Auth0ClientOptions,
  CacheLocation,
  LogoutOptions,
  LogoutUrlOptions,
  PopupLoginOptions,
  PopupConfigOptions,
  RedirectLoginOptions as Auth0RedirectLoginOptions,
  GetTokenWithPopupOptions,
  RedirectLoginResult,
  ICache,
  GetTokenSilentlyOptions,
  User,
} from '@auth0/auth0-spa-js';
import ProfileCard from '../../components/profileCard/profileCard'
import NavBar from '../../components/navBar/navBar'
import AuthBtn from '../../components/authBtn/authBtn'
import navLinks from '../../navLinks'

const ProfilePage = () => {


  const { user, getAccessTokenWithPopup, getIdTokenClaims, loginWithPopup } = useAuth0()

  const linkgoogle = async () => {
    const primary_accJWT = await getAccessTokenWithPopup({audience:'https://clouda-test.us.auth0.com/api/v2/',scope:'read:grants'})
    const sub = user?.sub
    const auth0 = new Auth0Client(
      {
        domain: process.env.GATSBY_AUTH0_DOMAIN || '',
        client_id: process.env.GATSBY_AUTH0_CLIENTID || '',
        redirect_uri: process.env.GATSBY_AUTH0_CALLBACK
      }
    )

    await auth0.loginWithPopup({ max_age: 0, scope: "openid" })

    const claims = await auth0.getIdTokenClaims()

    const resp = await fetch(`https://${process.env.GATSBY_AUTH0_DOMAIN}/api/v2/users/${sub}/identities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${primary_accJWT}`,
      },
      body: JSON.stringify({
        link_with: claims?.__raw,
      }),
    })
    console.log(resp.json())

  }

  return (
    <>
      <NavBar navLinks={navLinks} title='This Is Nav Bar' AuthBtn={AuthBtn} />
      <h1>This is Profile Page</h1>
      <ProfileCard imgUrl={user?.picture} name={user?.name} email={user?.email} linkGoogle={linkgoogle} />
    </>
  )
}
export default withAuthenticationRequired(ProfilePage)
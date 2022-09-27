import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { navigate } from 'gatsby'

const onRedirectCallback = (appState) => {
  navigate(appState?.returnTo || '/', { replace: true })
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={process.env.GATSBY_AUTH0_CALLBACK}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
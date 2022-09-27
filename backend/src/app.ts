import express from 'express'
import { auth} from 'express-oauth2-jwt-bearer'
import Auth0Api from './servicesExternelApi/auth0MngtApi.js'
import Router from './routes/routes.js'

const app = express()
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: '3D-Mvp-Backend',
  issuerBaseURL: `https://clouda-test.us.auth0.com`,
})

app.use('/api/shop',[checkJwt,Router])

app.listen(3000, function () {
  console.log('Listening on http://localhost:3000');
})
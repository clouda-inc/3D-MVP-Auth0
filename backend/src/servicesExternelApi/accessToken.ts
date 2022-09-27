import * as dotenv from 'dotenv'
import fetch from 'node-fetch';

dotenv.config({path:'.env.development'})

export default fetch(`https://clouda-test.us.auth0.com/oauth/token`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "client_id": process.env.client_id,
    "client_secret": process.env.client_secret,
    "audience": process.env.audience,
    "grant_type": process.env.grant_type,
  }),
})

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });
import { Auth0Api } from './servicesExternelApi/auth0MngtApi';
new Auth0Api().printToken();
const getAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield fetch(`https://clouda-test.us.auth0.com/oauth/token`, {
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
    });
    return token;
});
const app = express();
getAccessToken()
    .then(result => result.json()).
    then((result) => {
    let tk = result.access_token;
    console.log(tk);
    return fetch(`https://clouda-test.us.auth0.com/api/v2/client-grants`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tk}`,
        }
    });
})
    .then(results => results.json());
//.then(results =>console.log(results))
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: '3D-Mvp-Backend',
    issuerBaseURL: `https://clouda-test.us.auth0.com`,
});
// This route doesn't need authentication
app.get('/api/public', function (req, res) {
    res.json({
        message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
});
// This route needs authentication
app.get('/api/private', checkJwt, function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});
const checkScopes = requiredScopes('read:messages');
app.get('/api/private-scoped', checkJwt, checkScopes, function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
});
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});

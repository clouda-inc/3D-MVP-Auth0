import {Jwt} from '@okta/jwt-verifier'
declare module 'express-serve-static-core' {
    interface Request {
        jwt?: Jwt
    }
}
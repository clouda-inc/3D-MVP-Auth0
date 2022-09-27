import accessToken from "./accessToken";
export class Auth0Api {
    constructor() {
        this.acessToken = '';
        accessToken.then((result) => this.acessToken = result.access_token);
    }
    printToken() {
        console.log(accessToken);
    }
}

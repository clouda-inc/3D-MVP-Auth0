import accessToken from "./accessToken.js";

export default class Auth0Api {
  protected acToken: string = ''
  constructor(){
    
  }
  async printToken(){
    let tk = await accessToken
    let tok = await tk.json()
    
    console.log(tok)
  }
}

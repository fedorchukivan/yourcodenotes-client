import { ApiPath } from "../common/enums/api-path";
import { AuthRoutes } from "../common/enums/auth-routes";
import { HttpMethod } from "../common/enums/http-methods";
import { serverConfig } from "../config";


export default class AuthService {
  constructor(http) {
    this.http = http;
  }
  
  getUser() {
    return this.http.load(this._getUrl(AuthRoutes.GET_USER), {
      method: HttpMethod.GET
    });
  }

  signIn(payload) {
    return this.http.load(this._getUrl(AuthRoutes.SIGN_IN), {
      method: HttpMethod.POST,
      contentType: 'application/json',
      payload
    }).catch(error => {
      if (error.message === '406') {
        alert('Wrong email or password');
      }
      throw error;
    });
  }

  signUp(payload) {
    return this.http.load(this._getUrl(AuthRoutes.SIGN_UP), {
        method: HttpMethod.POST,
        contentType: 'application/json',
        payload
      }).catch(error => {
        if (error.message === '406') {
          alert('User with such email already exist');
        }
        throw error;
      });
  }

  _getUrl(path = '') {
    return `${serverConfig.API}${ApiPath.AUTH}${path}`;
  }
}
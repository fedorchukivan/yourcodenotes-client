import { HttpHeader } from '../common/enums/http-headers';
import { HttpMethod } from '../common/enums/http-methods';

class Http {
  load = (url, options = {}) => {
    const { method = HttpMethod.GET, payload = null, contentType } = options;
    const headers = this._getHeaders({
      contentType
    });
    const request = {
      method,
      headers
    }

    if (method === HttpMethod.POST || method === HttpMethod.UPDATE || method === HttpMethod.DELETE) request.body = JSON.stringify(payload);

    return fetch(url, request)
      .then(this.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw error
      });
  }

  _getHeaders = ({ contentType }) => {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }
    const token = window.sessionStorage.getItem('token');
    if (token) {
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  checkStatus(res) {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }

    return res;
  }
}

export { Http };
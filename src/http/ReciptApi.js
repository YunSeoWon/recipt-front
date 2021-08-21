import axios from "axios"

let instance = null;

class ReciptApi {
  constructor() {
    if (instance) return instance;

    this.ACCESS_TOKEN = 'reciptAccessToken';

    this.default = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': window.location.origin,
        'Access-Control-Allow-Headers': 'Origin, Content-Type'
      }
    })

    instance = this;
  }

  getToken(requestBody) {
    return this.default.post(
      `${process.env.VUE_APP_API_URL}/members/token`,
      requestBody
    );
  }

  signUp(requestBody) {
    return this.default.post(
      `${process.env.VUE_APP_API_URL}/members`,
      requestBody
    );
  }

  getMyProfile(accessToken) {
    return this.default.get(
      `${process.env.VUE_APP_API_URL}/members/profiles/me`,
      {},
      {
        headers: {
          reciptAccessToken: accessToken
        }
      }
    );
  }

  updateMyProfile(requestBody, accessToken) {
    return this.default.put(
      `${process.env.VUE_APP_API_URL}/members/profiles/me`,
      requestBody,
      {
        headers: {
          reciptAccessToken: accessToken
        }
      }
    );
  }
}

export default ReciptApi;

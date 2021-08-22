import axios from "axios"

let instance = null;

class ReciptApi {
  constructor() {
    if (instance) return instance;

    this.ACCESS_TOKEN = 'reciptAccessToken';

    instance = this;
  }



  getToken(requestBody) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/members/token`,
      requestBody
    );
  }

  refreshToken(requestBody) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/members/token/refresh`,
      requestBody
    );
  }

  signUp(requestBody) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}/members`,
      requestBody
    );
  }

  getMyProfile(accessToken) {
    return axios.get(
      `${process.env.VUE_APP_API_URL}/members/profiles/me`,
      {
        headers: {
          'reciptAccessToken': accessToken
        }
      }
    );
  }

  updateMyProfile(requestBody, accessToken) {
    return axios.put(
      `${process.env.VUE_APP_API_URL}/members/profiles/me`,
      requestBody,
      {
        headers: {
          'reciptAccessToken': accessToken
        }
      }
    );
  }
}

export default ReciptApi;

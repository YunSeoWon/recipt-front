import LocalStorageKeys from "../constants/LocalStorageKeys"
import ReciptApi from "../http/ReciptApi"
import jwt_decode from "jwt-decode"
import axios from "axios"

let LoginUtils = {
  isLogined() {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) != null
  },

  getToken() {
    let accessToken = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);

    if (accessToken == null) {
      window.location.href = "/user/login";
    } else {
      if (this.isTokenExpired(accessToken)) {
        let refreshToken = localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN);
        return this.reissueToken(refreshToken);
      } else {
        return accessToken;
      }
    }
  },

  isTokenExpired(token) {
    const { exp } = jwt_decode(token);

    console.log("token: " + jwt_decode(token));
    console.log("expired: " + exp);
    return Date.now() >= exp * 1000;
  },

  reissueToken(refreshToken) {
    if (refreshToken == null || this.isTokenExpired(refreshToken)) {
      localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
      localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
      window.location.href = "/user/login";
    } else {
      let requestBody = {
        refreshToken: refreshToken
      };

      let api = new ReciptApi();

      let token = null;
      api.refreshToken(requestBody)
        .then(res => {
          localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, res.data.accessToken);
          localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, res.data.refreshToken);
          token = res.data.accessToken;
          axios.defaults.headers.common[api.ACCESS_TOKEN] = res.data.accessToken;
        })
        .catch(err => {
          window.location.href = "/user/login";
        })

      return token;
    }
  }
}

export default LoginUtils;

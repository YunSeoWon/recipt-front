import LocalStorageKeys from "../constants/LocalStorageKeys"

let LoginUtils = {
  isLogined() {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) != null
  },
  
  getToken() {
    let token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);

    if (token == null) {
      window.location.href = "/user/login";
    } else {
      return token;
    }
  }
}

export default LoginUtils;

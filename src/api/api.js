import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: 'http://164.92.72.194:8080/api/v1/',
  timeout: 60 * 24 * 60,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json";
    if (Cookies.get("employee_token")) {
      // config.headers["Authorization"] = "Bearer " + Cookies.get("employee_token");
      config.headers["Authorization"] = "Bearer " + Cookies.get("employee_token");
    } else {
      // config.headers["Authorization"] = "Bearer 9|XHbMTjATWuq5FNFqMye8UCrADGTsi7bDubnRBfvc";
    }
    return config;
  },
  (error) => {
    alert(error); // for debug
    return Promise.reject(error);
  }
);

export default instance;

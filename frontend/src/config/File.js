import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8082",
  baseURL: "http://i6a506.p.ssafy.io:8082",
  headers: {
    "Content-Type": "multipart/form-data",
    token: localStorage.getItem("idToken"),
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "../constant";

// --------------------------- ADMIN ---------------------------
export const adminHttp = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
});

// request
adminHttp.interceptors.request.use((request) => {
  request.headers = {
    ...request.headers,
    Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
  return request;
});

// response
adminHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

// --------------------------- ADMIN USERS ---------------------------
export const adminUserHttp = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
});

// request
adminUserHttp.interceptors.request.use((request) => {
  request.headers = {
    ...request.headers,
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
  return request;
});

// response
adminUserHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

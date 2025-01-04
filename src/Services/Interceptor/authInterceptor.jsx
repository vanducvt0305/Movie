// Interceptor use for Register & Login Page

import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../constant";

export const authHttp = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
});

// request
authHttp.interceptors.request.use((request) => {
  request.headers = {
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
  return request;
});

// response
authHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

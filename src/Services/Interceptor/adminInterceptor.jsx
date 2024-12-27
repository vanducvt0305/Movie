import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "../constant";

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
adminHttp.interceptors.response.use((response) => {
  console.log("response: ", response);
  return response;
}),
  (error) => {
    console.error("error: ", error.response.data.content);
    console.error("status: ", error.response.status);
    return error.response;
  };

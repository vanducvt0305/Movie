import {
  ACCESS_TOKEN,
  LOGIN_API,
  PASSWORD,
  REMEMBER_ACCOUNT,
  USER_INFO_API,
  USER_NAME,
} from "../../Services/constant";
import { adminHttp } from "../../Services/Interceptor/adminInterceptor";
import { authHttp } from "../../Services/Interceptor/authInterceptor";
import {
  handleAlertLoginSuccess,
  handleLoading,
  handleLoginInfo,
  handleOpenModalAlert,
  handleUserInfo,
  handleValidationErr,
} from "../Reducer/loginReducer";

const validationPayload = (isValidationErr, message) => {
  return {
    isValidationErr: isValidationErr,
    message: message,
  };
};

const preparePayloadForLogin = (data) => {
  const { username, password } = data;
  return {
    taiKhoan: username,
    matKhau: password,
  };
};

export const handleLoginAction = (values, rememberAccount) => {
  const payload = preparePayloadForLogin(values);
  return async (dispatch, getState) => {
    const response = await authHttp.post(LOGIN_API, payload);
    dispatch(handleLoading(false));
    if (response.status === 200) {
      dispatch(handleAlertLoginSuccess(true));
      dispatch(handleValidationErr(validationPayload(false, "")));
      dispatch(handleOpenModalAlert(true));
      dispatch(
        handleLoginInfo(
          rememberAccount ? values : { username: "", password: "" }
        )
      );
      localStorage.setItem(REMEMBER_ACCOUNT, JSON.stringify(rememberAccount));
      localStorage.setItem(USER_NAME, values.username);
      localStorage.setItem(PASSWORD, values.password);
      localStorage.setItem(ACCESS_TOKEN, response.data.content.accessToken);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      if (response.status === 404) {
        dispatch(
          handleValidationErr(validationPayload(true, response.data.content))
        );
      } else {
        dispatch(handleAlertLoginSuccess(false));
        dispatch(handleOpenModalAlert(true));
      }
    }
  };
};

export const getUserInfo = () => {
  return async (dispatch, getState) => {
    adminHttp;
    USER_INFO_API;
    const response = await adminHttp.post(USER_INFO_API);
    if (response.status === 200) {
      dispatch(handleUserInfo(response.data.content));
    } else {
      alert(response.data.content);
    }
  };
};

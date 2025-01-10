import { useSelector } from "react-redux";
import {
  ACCESS_TOKEN,
  LOGIN_API,
  PASSWORD,
  REMEMBER_ACCOUNT,
  USER_NAME,
  TOKEN_CYBERSOFT
} from "../../Services/constant";
import { authHttp } from "../../Services/Interceptor/authInterceptor";
import {
  handleAlertLoginSuccess,
  handleLoading,
  handleLoginInfo,
  handleOpenModalAlert,
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
      // localStorage.setItem("TOKEN_CYBERSOFT", TOKEN_CYBERSOFT)

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

// Anh mới kiểm tra, lí do em k lấy dc id là do 1 bạn code cái phương thức get yêu cầu phải truyền thêm cái token của Cybersoft á


import { GROUP_ID, REGISTER_API } from "../../Services/constant";
import {
  handleAlertRegisterSuccess,
  handleLoading,
  handleOpenModalAlert,
  handleValidationErr,
} from "../Reducer/registerReducer";
import { authHttp } from "../../Services/Interceptor/authInterceptor";

const validationPayload = (isValidationErr, message) => {
  return {
    isValidationErr: isValidationErr,
    message: message,
  };
};

const preparePayloadForRegister = (data) => {
  const { username, password, fullName, email, phone } = data;
  return {
    taiKhoan: username,
    matKhau: password,
    email: email,
    soDt: phone,
    // maNhom: GROUP_ID,
    hoTen: fullName,
  };
};

export const handleRegisterAction = (data) => {
  const payload = preparePayloadForRegister(data);
  console.log("payload for register: ", payload);
  return async (dispatch, getState) => {
    const response = await authHttp.post(REGISTER_API, payload);
    dispatch(handleLoading(false));
    if (response.status === 200) {
      dispatch(handleAlertRegisterSuccess(true));
      dispatch(handleValidationErr(validationPayload(false, "")));
      dispatch(handleOpenModalAlert(true));
    } else {
      if (response.status === 400) {
        dispatch(
          handleValidationErr(validationPayload(true, response.data.content))
        );
      } else {
        dispatch(handleAlertRegisterSuccess(false));
        dispatch(handleOpenModalAlert(true));
      }
    }
  };
};

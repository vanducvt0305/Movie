import { createSlice } from "@reduxjs/toolkit";
import { PASSWORD, REMEMBER_ACCOUNT, USER_NAME } from "../../Services/constant";

const initialState = {
  loading: false,
  openModalAlert: false,
  alertLoginSuccess: false, // use to set Details Alert Info (status 200, and else (!== 404))
  validationErr: {
    isValidationErr: false,
    message: "",
  }, // error status 404
  rememberAccount: JSON.parse(localStorage.getItem(REMEMBER_ACCOUNT)),
  loginInfo: {
    username: localStorage.getItem(USER_NAME),
    password: localStorage.getItem(PASSWORD),
  }, // depend on state of rememberAccount
  userInfo: {
    taiKhoan: "",
    hoTen: "",
  },
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    handleLoading(state, action) {
      state.loading = action.payload;
    },
    handleOpenModalAlert(state, action) {
      state.openModalAlert = action.payload;
    },
    handleAlertLoginSuccess(state, action) {
      state.alertLoginSuccess = action.payload;
    },
    handleValidationErr(state, action) {
      state.validationErr = action.payload;
    },
    handleRememberAccount(state, action) {
      state.rememberAccount = action.payload;
    },
    handleLoginInfo(state, action) {
      state.loginInfo.username = action.payload.username;
      state.loginInfo.password = action.payload.password;
    },
    handleUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const {
  handleLoading,
  handleOpenModalAlert,
  handleAlertLoginSuccess,
  handleValidationErr,
  handleRememberAccount,
  handleLoginInfo,
  handleUserInfo,
} = loginReducer.actions;

export default loginReducer.reducer;

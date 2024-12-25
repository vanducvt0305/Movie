import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  openModalAlert: false,
  alertRegisterSuccess: false, // use to set Details Alert Info (status 200, and else (!== 400))
  validationErr: {
    isValidationErr: false,
    message: "",
  }, // error status 400
};

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {
    handleLoading(state, action) {
      state.loading = action.payload;
    },
    handleOpenModalAlert(state, action) {
      state.openModalAlert = action.payload;
    },
    handleAlertRegisterSuccess(state, action) {
      state.alertRegisterSuccess = action.payload;
    },
    handleValidationErr(state, action) {
      state.validationErr = action.payload;
    },
  },
});

export const {
  handleLoading,
  handleOpenModalAlert,
  handleAlertRegisterSuccess,
  handleValidationErr,
} = registerReducer.actions;

export default registerReducer.reducer;

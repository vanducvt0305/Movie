import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
  adminInfo: {
    adminAccount: "",
    adminName: "",
    adminGroup: "",
    adminEmail: "",
  },
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    verifyAdmin(state, action) {
      state.isAdmin = action.payload;
    },
    handleAdminInfo(state, action) {
      state.adminInfo.adminAccount = action.payload.taiKhoan;
      state.adminInfo.adminName = action.payload.hoTen;
      state.adminInfo.adminGroup = action.payload.maNhom;
      state.adminInfo.adminEmail = action.payload.email;
    },
  },
});

export const { verifyAdmin, handleAdminInfo } = adminReducer.actions;

export default adminReducer.reducer;

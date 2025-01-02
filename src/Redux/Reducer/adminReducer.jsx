import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
  adminInfo: {
    adminAccount: "",
    adminName: "",
    adminPhone: "",
    adminEmail: "",
  },
  arrayUsers: [],
  selectedUser: {
    taiKhoan: "",
    matKhau: "",
    maLoaiNguoiDung: "",
    hoTen: "",
    email: "",
    soDT: "",
  },
  navigateBackToAdminUser: false,
  isLoading: false,
  typeOfUser: [],
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
      state.adminInfo.adminPhone = action.payload.soDT;
      state.adminInfo.adminEmail = action.payload.email;
    },
    handleArrUser(state, action) {
      state.arrayUsers = action.payload;
    },
    handleGetTypeOfUser(state, action) {
      state.typeOfUser = action.payload;
    },
    handleDeleteUser(state, action) {
      const indexRemove = state.arrayUsers.findIndex(
        (item) => item.taiKhoan === action.payload
      );
      state.arrayUsers.splice(indexRemove, 1);
    },
    handleSelectedUserInfo(state, action) {
      state.selectedUser = action.payload;
    },
    handleNavigateBackToAdminUser(state, action) {
      state.navigateBackToAdminUser = action.payload;
    },
    handleLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  verifyAdmin,
  handleAdminInfo,
  handleArrUser,
  handleGetTypeOfUser,
  handleDeleteUser,
  handleSelectedUserInfo,
  handleNavigateBackToAdminUser,
  handleLoading,
} = adminReducer.actions;

export default adminReducer.reducer;

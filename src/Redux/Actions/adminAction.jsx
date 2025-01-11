import {
  adminHttp,
  adminUserHttp,
} from "../../Services/Interceptor/adminInterceptor";
import {
  ADD_USER_API,
  DELETE_USER_API,
  GROUP_ID,
  TYPE_OF_USER_API,
  UPDATE_USER_API,
  USER_INFO_API,
  USER_LIST_API,
} from "../../Services/constant";
import {
  handleAdminInfo,
  handleArrUser,
  handleDeleteUser,
  handleGetTypeOfUser,
  handleLoading,
  handleNavigateBackToAdminUser,
  handleShowTotal,
  handleUserPagination,
  verifyAdmin,
} from "../Reducer/adminReducer";

// ADMIN
export const verifyAdminAction = () => {
  return async (dispatch, getState) => {
    const response = await adminHttp.post(USER_INFO_API);
    if (response.status === 200) {
      const userType = response.data.content.maLoaiNguoiDung;
      if (userType === "QuanTri") {
        dispatch(verifyAdmin(true));
        dispatch(handleAdminInfo(response.data.content));
        console.log("response.data.content: ", response.data.content);

        return;
      }
    }
  };
};

export const getArrayUsers = (groupId, keyword) => {
  return async (dispatch, getState) => {
    let params = [];
    if (groupId) {
      params.push("MaNhom=" + groupId);
    }
    if (keyword) {
      params.push("tuKhoa=" + keyword);
    }
    const finalUrl =
      params.length > 0
        ? USER_LIST_API + "?" + params.join("&")
        : USER_LIST_API;
    const response = await adminUserHttp.get(finalUrl);
    if (response.status === 200) {
      dispatch(handleArrUser(response.data.content));
      const pagination = {
        total: response.data.content.length,
        showTotal: (total) => handleShowTotal(total),
      };
      dispatch(handleUserPagination(pagination));
    } else {
      alert(response.data.content);
      return;
    }
  };
};

export const getTypeOfUserList = () => {
  return async (dispatch, getState) => {
    const response = await adminUserHttp.get(TYPE_OF_USER_API);
    if (response.status === 200) {
      dispatch(handleGetTypeOfUser(response.data.content));
    } else {
      alert(response.data.content);
      return;
    }
  };
};

export const deleteUser = (userAccount) => {
  return async (dispatch, getState) => {
    const response = await adminHttp.delete(DELETE_USER_API + userAccount);
    if (response.status === 200) {
      dispatch(handleDeleteUser(userAccount));
    } else {
      alert(response.data.content);
      return;
    }
  };
};

const preparePayLoadForUserInfo = (userInfo) => {
  const { username, password, email, phone, fullName, typeOf } = userInfo;
  return {
    taiKhoan: username,
    matKhau: password,
    email: email,
    soDt: phone,
    maNhom: GROUP_ID,
    maLoaiNguoiDung: typeOf,
    hoTen: fullName,
  };
};

export const addUser = (userInfo) => {
  const payload = preparePayLoadForUserInfo(userInfo);
  return async (dispatch, getState) => {
    const response = await adminHttp.post(ADD_USER_API, payload);
    dispatch(handleLoading(false));
    if (response.status === 200) {
      alert("THÊM NGƯỜI DÙNG THÀNH CÔNG !");
      dispatch(handleNavigateBackToAdminUser(true));
    } else {
      alert(response.data.content.toUpperCase());
    }
  };
};

export const updateUser = (userInfo) => {
  const payload = preparePayLoadForUserInfo(userInfo);
  return async (dispatch, getState) => {
    const response = await adminHttp.post(UPDATE_USER_API, payload);
    dispatch(handleLoading(false));
    if (response.status === 200) {
      alert("CẬP NHẬT THÔNG TIN NGƯỜI DÙNG THÀNH CÔNG !");
      dispatch(handleNavigateBackToAdminUser(true));
    } else {
      alert(response.data.content.toUpperCase());
    }
  };
};

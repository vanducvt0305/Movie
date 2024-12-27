// Dùng để xử lý việc call API
import { adminHttp } from "../../Services/Interceptor/adminInterceptor";
import { USER_INFO } from "../../Services/constant";
import { handleAdminInfo, verifyAdmin } from "../Reducer/adminReducer";

// ADMIN
export const verifyAdminAction = () => {
  return async (dispatch, getState) => {
    const response = await adminHttp.post(USER_INFO);
    if (response.status === 200) {
      const userType = response.data.content.maLoaiNguoiDung;
      if (userType === "QuanTri") {
        console.log("Day la Admin");
        dispatch(verifyAdmin(true));
        dispatch(handleAdminInfo(response.data.content));
        return;
      }
    } else {
      window.location.href = "/";
    }
  };
};

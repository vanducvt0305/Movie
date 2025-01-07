import { configureStore } from "@reduxjs/toolkit";

import thongTinThuongHieuRapReducer from "./thongTinThuongHieuRapReducer";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";
export const store = configureStore({
  reducer: {
    thongTinThuongHieuRapReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    adminReducer: adminReducer,
  },
});

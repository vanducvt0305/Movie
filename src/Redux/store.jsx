import { configureStore } from "@reduxjs/toolkit";

import thongTinThuongHieuRapReducer from "./thongTinThuongHieuRapReducer";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";
import heThongRapChieuReducer from "./heThongRapChieuReducer";
import datVeReducer from "./datVeReducer";
export const store = configureStore({
  reducer: {
    datVeReducer,
    heThongRapChieuReducer,
    thongTinThuongHieuRapReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    adminReducer: adminReducer,
  },
});

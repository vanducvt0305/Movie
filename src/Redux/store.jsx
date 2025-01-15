import { configureStore } from "@reduxjs/toolkit";

import thongTinThuongHieuRapReducer from "./Reducer/thongTinThuongHieuRapReducer";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";
import heThongRapChieuReducer from "./Reducer/heThongRapChieuReducer";
import datVeReducer from "./Reducer/datVeReducer";
export const store = configureStore({
  reducer: {
    datVeReducer,
    heThongRapChieuReducer,
    thongTinThuongHieuRapReducer,
    registerReducer,
    loginReducer,
    adminReducer,
  },
});

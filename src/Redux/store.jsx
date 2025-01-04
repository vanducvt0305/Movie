import { configureStore } from "@reduxjs/toolkit";

import thongTinLichChieuHeThongRapReducer from "./thongTinLichChieuHeThongRapReducer";
import thongTinCumRapReducer from "./thongTinCumRapReducer";
import danhSachPhimReducer from "./danhSachPhimReducer";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";
export const store = configureStore({
  reducer: {
    thongTinLichChieuHeThongRapReducer,
    thongTinCumRapReducer,
    danhSachPhimReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    adminReducer: adminReducer,
  },
});

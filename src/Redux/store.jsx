import { configureStore } from "@reduxjs/toolkit";
import thongTinLichChieuHeThongRapReducer from "./thongTinLichChieuHeThongRapReducer";
import thongTinCumRapReducer from "./thongTinCumRapReducer";
import danhSachPhimReducer from "./danhSachPhimReducer";

export const store = configureStore({
  reducer: {
    thongTinLichChieuHeThongRapReducer,
    thongTinCumRapReducer,
    danhSachPhimReducer,
  },
});

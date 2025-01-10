import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinThuongHieuRap: [],
  thongTinLstCumRap: [],
  thongTinCumRap: [],
  ngayGioChieuPhimChiTiet: [],
};

const thongTinThuongHieuRapReducer = createSlice({
  name: "thongTinThuongHieuRapReducer",
  initialState,
  reducers: {
    layThongTinThuongHieuRapAction: (state, action) => {
      state.thongTinThuongHieuRap = action.payload;
    },
    layThongTinLstCumRapAction: (state, action) => {
      state.thongTinLstCumRap = action.payload;
      state.thongTinCumRap = action.payload[0];
      state.ngayGioChieuPhimChiTiet =
        action.payload[0].lstCumRap[0].danhSachPhim;
    },

    renderThongTinCumRapAction: (state, action) => {
      state.thongTinCumRap = action.payload;
    },
    renderNgayGioChieuPhimChiTietAction: (state, action) => {
      state.ngayGioChieuPhimChiTiet = action.payload;
    },
  },
});

export const {
  layThongTinThuongHieuRapAction,
  layThongTinLstCumRapAction,
  renderThongTinCumRapAction,
  renderNgayGioChieuPhimChiTietAction,
} = thongTinThuongHieuRapReducer.actions;

export default thongTinThuongHieuRapReducer.reducer;

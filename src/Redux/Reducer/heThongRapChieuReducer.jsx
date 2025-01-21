import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinLichChieuPhim: {},
  heThongRapChieu: {},
};

const heThongRapChieuReducer = createSlice({
  name: "heThongRapChieuReducer",
  initialState,
  reducers: {
    layThongTinLichChieuPhimAction: (state, action) => {
      state.thongTinLichChieuPhim = action.payload;
      //   console.log(action.payload.heThongRapChieu[0]);
      state.heThongRapChieu = action.payload.heThongRapChieu[0];
    },
    layThongTinHeThongRapChieuAction: (state, action) => {
      state.heThongRapChieu = action.payload;
    },
  },
});

export const {
  layThongTinHeThongRapChieuAction,
  layThongTinLichChieuPhimAction,
} = heThongRapChieuReducer.actions;

export default heThongRapChieuReducer.reducer;

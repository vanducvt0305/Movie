import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
};

const datVeReducer = createSlice({
  name: "datVeReducer",
  initialState,
  reducers: {
    layThongTinPhimVaDanhSachGheAction: (state, action) => {
      state.danhSachGhe = action.payload.danhSachGhe;
      state.thongTinPhim = action.payload.thongTinPhim;
    },
  },
});

export const { layThongTinPhimVaDanhSachGheAction } = datVeReducer.actions;

export default datVeReducer.reducer;

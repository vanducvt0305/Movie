import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thongTinLichChieuHeThongRap: [],
};

const thongTinLichChieuHeThongRapReducer = createSlice({
  name: "thongTinLichChieuHeThongRapReducer",
  initialState,
  reducers: {
    layThongTinLichChieuHeThongRapAction: (state, action) => {
      state.thongTinLichChieuHeThongRap = action.payload;
    },
  },
});

export const { layThongTinLichChieuHeThongRapAction } =
  thongTinLichChieuHeThongRapReducer.actions;

export default thongTinLichChieuHeThongRapReducer.reducer;

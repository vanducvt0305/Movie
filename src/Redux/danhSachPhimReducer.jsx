import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachPhim: [],
};

const danhSachPhimReducer = createSlice({
  name: "danhSachPhimReducer",
  initialState,
  reducers: {
    layDanhSachPhimAction: (state, action) => {
      state.danhSachPhim = action.payload;
    },
  },
});

export const { layDanhSachPhimAction } = danhSachPhimReducer.actions;

export default danhSachPhimReducer.reducer;

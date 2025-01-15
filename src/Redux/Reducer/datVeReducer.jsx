import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
  datVe: {
    maLichChieu: 0,
    danhSachVe: [],
  },
  gheDangDat: [],
};

const datVeReducer = createSlice({
  name: "datVeReducer",
  initialState,
  reducers: {
    layThongTinPhimVaDanhSachGheAction: (state, action) => {
      state.danhSachGhe = action.payload.danhSachGhe.map((seat) => ({
        ...seat,
        gheDangDat: false,
      }));
      state.thongTinPhim = action.payload.thongTinPhim;
    },
    layGheDangDatAction: (state, action) => {
      const { payload } = action;

      if (state.danhSachGhe[parseInt(payload.stt) - 1].gheDangDat === false) {
        state.danhSachGhe[parseInt(payload.stt) - 1].gheDangDat = true;
        state.gheDangDat = state.danhSachGhe.filter((item) => {
          return item.gheDangDat === true;
        });
      } else {
        state.danhSachGhe[parseInt(payload.stt) - 1].gheDangDat = false;
        state.gheDangDat = state.danhSachGhe.filter((item) => {
          return item.gheDangDat === true;
        });
      }
    },
    handleDeleteAction: (state, action) => {
      const { payload } = action;
      state.danhSachGhe[payload].gheDangDat = false;
      state.gheDangDat = state.danhSachGhe.filter((item) => {
        return item.gheDangDat === true;
      });
    },
  },
});

export const {
  layThongTinPhimVaDanhSachGheAction,
  layGheDangDatAction,
  handleDeleteAction,
} = datVeReducer.actions;

export default datVeReducer.reducer;

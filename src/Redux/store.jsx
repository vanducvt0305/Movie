import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";

export const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    adminReducer: adminReducer,
    QuanLyPhimReducer: QuanLyPhimReducer,
  },
});

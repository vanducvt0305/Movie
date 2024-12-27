import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";
import adminReducer from "./Reducer/adminReducer";

export const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    adminReducer: adminReducer,
  },
});

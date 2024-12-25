import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Reducer/registerReducer";
import loginReducer from "./Reducer/loginReducer";

export const store = configureStore({
  reducer: {
    registerReducer: registerReducer,
    loginReducer: loginReducer,
  },
});

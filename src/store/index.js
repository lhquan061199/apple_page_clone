import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./reducers/device";

export default configureStore({
  reducer: {
    device: deviceReducer,
  },
});

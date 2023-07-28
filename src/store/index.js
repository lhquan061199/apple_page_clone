import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "./reducers/device/selectSlice";

export default configureStore({
  reducer: {
    select: selectReducer,
  },
});

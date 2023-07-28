import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "./reducers/device";

export default configureStore({
  reducer: {
    select: selectReducer,
  },
});

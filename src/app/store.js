import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "../features/select/selectSlice";

export default configureStore({
  reducer: {
    select: selectReducer,
  },
});

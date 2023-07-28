import { createSlice } from "@reduxjs/toolkit";

import { devices, initData } from "../../../assets/data";

var initial = initData(devices[0]);

export const selectSlice = createSlice({
  name: "counter",
  initialState: { value: initial },
  reducers: {
    setSelectedDevice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedDevice } = selectSlice.actions;
export default selectSlice.reducer;

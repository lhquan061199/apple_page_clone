import { createSlice } from "@reduxjs/toolkit";

import { devices, initData } from "../../../assets/data";

var initial = initData(devices[0]);

export const selectSlice = createSlice({
  name: "counter",
  initialState: { value: initial },
  reducers: {
    handlClickDevice: (state, action) => {
      state.value = initData(action.payload);
    },

    addStateCurrentIsSelected: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addStateCurrentIsSelected } = selectSlice.actions;
export default selectSlice.reducer;

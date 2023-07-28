import { createSlice } from "@reduxjs/toolkit";

import {
  purplePreviews,
  goldPreviews,
  silverPreviews,
  blackPreviews,
} from "../../components/ScrollContent/importAssets";
import {
  purplePos1Img,
  purplePos2Img,
  purplePos3Img,
} from "../../components/ScrollContent/importAssets";
import {
  goldPos1Img,
  goldPos2Img,
  goldPos3Img,
} from "../../components/ScrollContent/importAssets";
import {
  silverPos1Img,
  silverPos2Img,
  silverPos3Img,
} from "../../components/ScrollContent/importAssets";
import {
  blackPos1Img,
  blackPos2Img,
  blackPos3Img,
} from "../../components/ScrollContent/importAssets";

const devices = [
  {
    model: "ip14pr",
    name: "iPhone14 Pro",
    originalCost: 27999000,
    description: {
      screen: 6.1,
    },
    option: {
      color: [
        {
          type: "purple",
          subType: "Tía đậm",
          additionalFee: 0,
          previewImg: purplePreviews,
          media: {
            pos_1: purplePos1Img,
            pos_2: purplePos2Img,
            pos_3: purplePos3Img,
          },
        },
        {
          type: "gold",
          subType: "Gold",
          additionalFee: 100000,
          previewImg: goldPreviews,
          media: {
            pos_1: goldPos1Img,
            pos_2: goldPos2Img,
            pos_3: goldPos3Img,
          },
        },
        {
          type: "silver",
          subType: "Bạc",
          additionalFee: 200000,
          previewImg: silverPreviews,
          media: {
            pos_1: silverPos1Img,
            pos_2: silverPos2Img,
            pos_3: silverPos3Img,
          },
        },
        {
          type: "black",
          subType: "Đen ánh thép",
          additionalFee: 300000,
          previewImg: blackPreviews,
          media: {
            pos_1: blackPos1Img,
            pos_2: blackPos2Img,
            pos_3: blackPos3Img,
          },
        },
      ],
      storage: [
        {
          capacity: "128GB",
          additionalFee: 0,
        },
        {
          capacity: "256GB",
          additionalFee: 2849000,
        },
        {
          capacity: "512GB",
          additionalFee: 8549000,
        },
        {
          capacity: "1TB",
          additionalFee: 14249000,
        },
      ],
    },
  },
  {
    model: "ip14prm",
    name: "iPhone14 Pro Max",
    originalCost: 30999000,
    description: {
      screen: 6.1,
    },
    option: {
      color: [
        {
          type: "purple",
          subType: "Tía đậm",
          additionalFee: 0,
          previewImg: purplePreviews,
          media: {
            pos_1: purplePos1Img,
            pos_2: purplePos2Img,
            pos_3: purplePos3Img,
          },
        },
        {
          type: "gold",
          subType: "Gold",
          additionalFee: 100000,
          previewImg: goldPreviews,
          media: {
            pos_1: goldPos1Img,
            pos_2: goldPos2Img,
            pos_3: goldPos3Img,
          },
        },
        {
          type: "silver",
          subType: "Bạc",
          additionalFee: 200000,
          previewImg: silverPreviews,
          media: {
            pos_1: silverPos1Img,
            pos_2: silverPos2Img,
            pos_3: silverPos3Img,
          },
        },
        {
          type: "black",
          subType: "Đen ánh thép",
          additionalFee: 300000,
          previewImg: blackPreviews,
          media: {
            pos_1: blackPos1Img,
            pos_2: blackPos2Img,
            pos_3: blackPos3Img,
          },
        },
      ],
      storage: [
        {
          capacity: "128GB",
          additionalFee: 0,
        },
        {
          capacity: "256GB",
          additionalFee: 2950000,
        },
        {
          capacity: "512GB",
          additionalFee: 8548000,
        },
        {
          capacity: "1TB",
          additionalFee: 14250000,
        },
      ],
    },
  },
];

function initData(device) {
  let result = JSON.parse(JSON.stringify(device));

  for (let key in result.option) {
    result.option[`selected_${key}`] = result.option[key][0];
  }
  return result;
}

var initial = initData(devices[0]);

export const selectSlice = createSlice({
  name: "counter",
  initialState: { value: initial },
  reducers: {
    handlClickDevice: (state, action) => {
      state.value = initData(action.payload);
    },
    selectColor: (state, action) => {
      state.value = {
        ...state.value,
        option: {
          ...state.value.option,
          selected_color: action.payload,
          added_colorFee: action.payload.additionalFee,
        },
      };
    },

    selecStorage: (state, action) => {
      state.value = {
        ...state.value,
        option: {
          ...state.value.option,
          selected_storage: action.payload,
        },
      };
    },
  },
});

export const {
  incrementByAmount,
  handlClickDevice,
  selectColor,
  selecStorage,
} = selectSlice.actions;
export default selectSlice.reducer;

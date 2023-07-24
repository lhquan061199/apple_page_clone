import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Ribbon from "./components/Ribbon";
import ScrollContent from "./components/ScrollContent";
import Compare from "./components/Compare/Compare";
import Question from "./components/Question/Question";
import AppleTrade from "./components/AppleTrade/AppleTrade";
import AppleBox from "./components/AppleBox/AppleBox";
import AppleCare from "./components/AppleCare/AppleCare";

import {
  purplePreviews,
  goldPreviews,
  silverPreviews,
  blackPreviews,
} from "./components/ScrollContent/importAssets";
import {
  purplePos1Img,
  purplePos2Img,
  purplePos3Img,
} from "./components/ScrollContent/importAssets";
import {
  goldPos1Img,
  goldPos2Img,
  goldPos3Img,
} from "./components/ScrollContent/importAssets";
import {
  silverPos1Img,
  silverPos2Img,
  silverPos3Img,
} from "./components/ScrollContent/importAssets";
import {
  blackPos1Img,
  blackPos2Img,
  blackPos3Img,
} from "./components/ScrollContent/importAssets";

function App() {
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

  const [showAppleCare, setShowAppleCare] = useState(false);

  const [device, setDevice] = useState(initData(devices[0]));

  function calculatingCost(original, colorCost, storageCost) {
    let isFeeColor = 0;

    if (colorCost) {
      isFeeColor = colorCost;
    }

    let sumCost = (original + isFeeColor + storageCost).toLocaleString();
    return sumCost;
  }

  let finalCost = calculatingCost(
    device.originalCost,
    device.option.added_colorFee,
    device.option.selected_storage.additionalFee
  );

  const handleShowAppleCare = () => {
    setShowAppleCare(true);
  };

  function initData(device) {
    let result = JSON.parse(JSON.stringify(device));

    for (let key in result.option) {
      result.option[`selected_${key}`] = result.option[key][0];
    }
    return result;
  }

  function handleClick(item) {
    setDevice(initData(item));
  }

  function handleColorSelected(newColor, addedColor) {
    setDevice((device) => {
      return {
        ...device,
        option: {
          ...device.option,
          selected_color: newColor,
          added_colorFee: addedColor,
        },
      };
    });
  }

  function handleStorageSelected(newStorage) {
    setDevice((device) => {
      return {
        ...device,
        option: {
          ...device.option,
          selected_storage: newStorage,
        },
      };
    });
  }

  return (
    <div>
      <Header finalCost={finalCost}></Header>
      <Ribbon></Ribbon>
      <ScrollContent
        initData={initData}
        devices={devices}
        device={device}
        finalCost={finalCost}
        setDevice={setDevice}
        handleClick={handleClick}
        handleColorSelected={handleColorSelected}
        handleStorageSelected={handleStorageSelected}
      ></ScrollContent>
      <AppleTrade
        onClick={handleShowAppleCare}
        showAppleCare={showAppleCare}
      ></AppleTrade>
      <AppleCare
        showAppleCare={showAppleCare}
        finalCost={finalCost}
        device={device}
      ></AppleCare>
      <AppleBox devices={devices} device={device}></AppleBox>
      <Compare></Compare>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;

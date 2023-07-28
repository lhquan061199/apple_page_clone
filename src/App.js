import { useState } from "react";
import { useSelector } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Ribbon from "./components/Ribbon";
import ScrollContent from "./components/ScrollContent";
import Compare from "./components/Compare/Compare";
import Question from "./components/Question/Question";
import AppleTrade from "./components/AppleTrade/AppleTrade";
import AppleBox from "./components/AppleBox/AppleBox";
import AppleCare from "./components/AppleCare/AppleCare";
import { devices } from "./assets/data";

function App() {
  const device = useSelector((state) => state.device.value);

  const [showAppleCare, setShowAppleCare] = useState(false);

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

  return (
    <div>
      <Header finalCost={finalCost}></Header>
      <Ribbon></Ribbon>
      <ScrollContent devices={devices} finalCost={finalCost}></ScrollContent>
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

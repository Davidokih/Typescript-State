import React from "react";
import Comp1 from "./component/Comp1";
import DisplayScreen from "./Component2/DisplayScreen";
import InputScreen from "./Component2/InputScreen";
import ReduxComp from "./Component3/ReduxComp";
import Comp4 from "./Component4/Comp4";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <br />
      <br />
      <div>Context API</div>
      <br />
      <InputScreen />
      <br />
      <br />
      <br />
      <DisplayScreen />

      <br />
      <br />
      <br />
      <div>Redux</div>
      <br />
      <br />
      <ReduxComp />
      <br />
      <br />
      <br />
      <Comp4 />
    </div>
  );
};

export default App;

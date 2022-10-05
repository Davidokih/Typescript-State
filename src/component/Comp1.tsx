import React, { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  const [data, setData] = useState<number>(0);

  return (
    <div>
      <div>This is Component 1</div>
      <Comp2 data={data} setData={setData} />
    </div>
  );
};

export default Comp1;

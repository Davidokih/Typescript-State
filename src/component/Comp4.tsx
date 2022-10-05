import React from "react";
import Comp5 from "./Comp5";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const Comp4: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <div>This is Component 4</div>
      <Comp5 data={data} setData={setData} />
    </div>
  );
};

export default Comp4;

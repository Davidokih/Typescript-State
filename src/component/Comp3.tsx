import React from "react";
import Comp4 from "./Comp4";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const Comp3: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <div>This is Component 3</div>
      <Comp4 data={data} setData={setData} />
    </div>
  );
};

export default Comp3;

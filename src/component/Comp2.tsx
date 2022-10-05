import React from "react";
import Comp3 from "./Comp3";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const Comp2: React.FC<Props> = ({ data, setData }) => {
  const addNumber = () => {
    setData(data + 1);
  };

  return (
    <div>
      <div>This is Component 2</div>

      <button onClick={addNumber}>Add 1 to Data</button>
      <Comp3 data={data} setData={setData} />
    </div>
  );
};

export default Comp2;

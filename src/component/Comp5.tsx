import React from "react";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const Comp5: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <div>This is Component 5</div>
      <div>This is the Data: {data}</div>
    </div>
  );
};

export default Comp5;

import React from "react";
import { useSelector, shallowEqual } from "react-redux";

interface todo {
  job: string;
  id: number;
}

interface todos {
  tasks: todo[];
}

const DisplayScreen = () => {
  return (
    <div>
      <div>
        {/* {value?.data.map((props) => (
          <div key={props.id}>
            <div>{props.name}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DisplayScreen;

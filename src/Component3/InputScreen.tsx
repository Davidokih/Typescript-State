import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, addTask } from "./ReduxState";

interface A {
  id: number;
  job: string;
}

const InputScreen = () => {
  const dispatch = useDispatch();
  const [stack, setStack] = useState<string>("");

  const addJobs = () => {
    const data: A = {
      id: Math.floor(Math.random() * 100),
      job: stack,
    };
    dispatch(addNewTask(data));
  };

  return (
    <div>
      <br />
      <input
        placeholder="Job"
        value={stack}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStack(e.target.value)
        }
      />
      <br />
      <button onClick={addJobs}>Add Job</button>
    </div>
  );
};

export default InputScreen;

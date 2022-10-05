import React, { useContext, useState } from "react";
import { UserContext } from "./GlobalState";

const InputScreen = () => {
  const value = useContext(UserContext);
  const [name, setName] = useState<string>("");
  const [stack, setStack] = useState<string>("");

  const addUser = () => {
    value?.setData((el) => [
      ...el,
      { id: Math.floor(Math.random() * 100), name: name, stack: stack },
    ]);
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <br />
      <input
        placeholder="Stack"
        value={stack}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStack(e.target.value)
        }
      />
      <br />
      <button onClick={addUser}>Add Student</button>
    </div>
  );
};

export default InputScreen;

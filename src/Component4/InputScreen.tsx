import React, { useContext, useState } from "react";

interface A {
  id: number;
  job: string;
}

const InputScreen = () => {
  const [stack, setStack] = useState<string>("");

  const addJobs = () => {
    const data: A = {
      id: Math.floor(Math.random() * 100),
      job: stack,
    };
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

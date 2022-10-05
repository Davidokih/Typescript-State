import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { charCount, count, text, user } from "./RecoilState";

interface A {
  id: number;
  name: string;
  stack: string;
}

const State1 = () => {
  const data = useRecoilValue(count);
  const dataText = useRecoilValue(text);
  const countText = useRecoilValue(charCount);
  const myUser = useRecoilValue(user);

  const [counter, setCounter] = useRecoilState(count);
  const [myText, setMyText] = useRecoilState(text);

  const [myData, setMyData] = useRecoilState(user);
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");

  const addUser = () => {
    const data = {
      id: Math.floor(Math.random() * 100),
      name,
      stack,
    };
    setMyData([...myData, data]);

    setName("");
  };

  const addCount = () => {
    setCounter(counter + 1);
  };

  const removeCount = () => {
    setCounter(counter - 1);
  };

  console.log(myData);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button style={{ margin: "0 10px" }} onClick={addCount}>
          Add
        </button>
        <div>{data}</div>
        <button style={{ margin: "0 10px" }} onClick={removeCount}>
          Remove
        </button>
      </div>
      <br />
      <br />
      <br />
      <input
        value={myText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setMyText(e.target.value);
        }}
      />
      <div>The Text: {dataText}</div>
      <div>The Text count: {countText}</div>

      <br />
      <br />
      <br />
      <input
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Stack"
        value={stack}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStack(e.target.value);
        }}
      />
      <br />
      <button onClick={addUser}>Add Up</button>

      <br />
      <br />
      <br />

      <div>
        {myUser.map((props) => (
          <div key={props?.id}>
            <div>{props?.name}</div>
            <div>{props?.stack}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default State1;

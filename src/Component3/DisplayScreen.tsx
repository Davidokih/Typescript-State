import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { store } from "./store";
import type { RootState, AppDispatch } from './store'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'

interface todo {
  job: string;
  id: number;
}

interface todos {
  tasks: todo[];
}

const DisplayScreen = () => {
  const data = useSelector((state: todos) => state);
  const useAppSelector= useSelector((state:TypedUseSelectorHook<RootState>)=>state.tasks)

console.log(useAppSelector);
  console.log(data);
  return (
    <div>
      <div>
        {useAppSelector.map((props) => (
          <div key={props.id}>
            <div>{props.job}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayScreen;

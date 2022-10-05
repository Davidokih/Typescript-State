import { createSlice } from "@reduxjs/toolkit";


interface todo {
  job: string;
  id: number;
}

interface todos {
  tasks: todo[];
}
const initialState: todos = {
  tasks: [],
};

const ReduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks = payload;
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter((el) => el.id !== payload);
    },
    addNewTask: (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },
  },
});

export const { removeTask, addTask, addNewTask } = ReduxState.actions;

export default ReduxState.reducer;

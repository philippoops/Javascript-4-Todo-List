import { createSlice } from '@reduxjs/toolkit';
import { todoDataSample } from '../../data/data';

const UserReducer = createSlice({
  name: 'users',
  initialState: todoDataSample,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    updateStatus: (state, action) => {
      const id = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    removeTask: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    clearTasks: (state) => {
      return [];
    },
  },
});

export const { addTask, updateStatus, removeTask, clearTasks } =
  UserReducer.actions;
export default UserReducer.reducer;
// users.map((todo) =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo
//     );

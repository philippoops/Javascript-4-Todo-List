import { createSlice } from '@reduxjs/toolkit';

const UserReducer = createSlice({
  name: 'users',
  initialState: {
    todos: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
      console.log(action);
    },
    updateStatus: (state, action) => {
      const data = action.payload;
      // const data = { done: !state.todos.done };
      state.todos.map((todo) =>
        todo.id === data.id ? { ...todo, done: !todo.done } : todo
      );
      console.log(data);
    },
    removeTask: (state, action) => {
      const data = action.payload;
      return state.todos.filter((todo) => todo.id !== data.id);
    },
    clearTasks: (state) => {
      return [];
    },
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTask, updateStatus, removeTask, clearTasks, setTodo } =
  UserReducer.actions;
export default UserReducer.reducer;
// users.map((todo) =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo
//     );

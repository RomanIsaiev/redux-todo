import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    todos: [],
  },
  reducers: {
    createToDo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const selectTodos = state => state.todos;

export const { createToDo, deleteToDo } = toDoSlice.actions;

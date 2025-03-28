import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/todo.types";
import { PayLoadEditTodo } from "../../types/todo.types";

const saveTodosLocalStorage = (Todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(Todos));
};
const loadTodosLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};
const initialState: Todo[] = loadTodosLocalStorage();
const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
      saveTodosLocalStorage(state);
    },

    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
      saveTodosLocalStorage(state);
    },

    editTodo: (state, action: PayloadAction<PayLoadEditTodo>) => {
      const { id, name } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.name = name;
      }
      saveTodosLocalStorage(state);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveTodosLocalStorage(state);
      }
    },
  },
});

export const { addTodo, toggleTodoStatus, editTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

import filterReducer from "./slices/filterTodoListSlice";
import todoReducer from "./slices/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    todoList: todoReducer,
  },
});
export default store;

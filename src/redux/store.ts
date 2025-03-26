import filterReducer from '../components/FilterTodoList/filterTodoListSlice';
import todoReducer from '../components/TodoList/todosSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        filters:filterReducer,
        todoList:todoReducer
    }
})
export default store;
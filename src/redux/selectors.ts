import { StateStore } from "../types/todo.types";
import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state: StateStore) => state.filters.search;
export const filterStatusSelector = (state: StateStore) => state.filters.status;
export const todoListSelector = (state: StateStore) => state.todoList;

export const todoRemainingSlector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);

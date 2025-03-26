import { StateStore } from "../types/todo.types";
import { createSelector } from "@reduxjs/toolkit";
import { FILTER_STATUSES } from "../constants/filter.constants";
import { Todo } from "../types/todo.types";
export const searchTextSelector = (state: StateStore) => state.filters.search;
export const filterStatusSelector = (state: StateStore) => state.filters.status;
export const todoListSelector = (state: StateStore) => state.todoList;

export const todoRemainingSlector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status): Todo[] => {
    return todoList.filter((todo) => {
      if (status === FILTER_STATUSES.ALL) {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === FILTER_STATUSES.COMPLETED ? todo.completed : !todo.completed)
      );
    });
  }
);

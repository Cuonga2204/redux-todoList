import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterTodo } from "../../types/todo.types";
import { FILTER_STATUSES } from "../../constants/filter.constants";
import { FilterStatus } from "../../types/todo.types";

const initialState: FilterTodo = {
  search: "",
  status: FILTER_STATUSES.ALL,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    statusFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { searchFilter, statusFilter } = filterSlice.actions;
export default filterSlice.reducer;

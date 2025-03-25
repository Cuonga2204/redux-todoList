import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { searchFilter, statusFilter } = filterSlice.actions;
export default filterSlice.reducer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "./filterSlice";
import { statusFilter } from "./filterSlice";
export const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const dispatch = useDispatch();

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
    dispatch(statusFilter(e.target.value));
  };

  const handleSearchFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  return (
    <div>
      <div className="text-base mb-1.5 font-semibold">Search</div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="input search text"
          className="w-full outline-none px-2.5 py-1 border-gray-200 border-1"
          value={searchText}
          onChange={handleSearchFilterChange}
        />
        <button className="w-[40px] border-1 border-gray-200 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div>
        <div className="text-base mb-1.5 font-semibold">Filter by status</div>
        <div className="flex justify-around">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="all"
              name="status"
              className="accent-blue-500"
              value="All"
              checked={filterStatus === "All"}
              onChange={handleStatusChange}
            />
            <label htmlFor="all" className="text-base cursor-pointer">
              All
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="completed"
              name="status"
              value="Completed"
              className="accent-blue-500"
              checked={filterStatus === "Completed"}
              onChange={handleStatusChange}
            />
            <label htmlFor="completed" className="text-base cursor-pointer">
              Completed
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="todo"
              name="status"
              className="accent-blue-500"
              value="Todo"
              checked={filterStatus === "Todo"}
              onChange={handleStatusChange}
            />
            <label htmlFor="todo" className="text-base cursor-pointer">
              To do
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/slices/filterTodoListSlice";
import { statusFilter } from "../../redux/slices/filterTodoListSlice";
import { FILTER_STATUSES } from "../../constants/filter.constants";
import { FilterStatus } from "../../types/todo.types";
import Input from "../../common/Input/Input";
import Radio from "../../common/Radio/Radio";
import { memo } from "react";

const FilterTodoList = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>(
    FILTER_STATUSES.ALL
  );
  const dispatch = useDispatch();

  const handleStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as FilterStatus;
      setFilterStatus(value);
      dispatch(statusFilter(value));
    },
    [dispatch]
  );

  const handleSearchFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
      dispatch(searchFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <div>
      <div className="text-base mb-1.5 font-semibold">Search</div>
      <div className="flex mb-4">
        <Input
          placeholder="input search text"
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
          <Radio
            id="all"
            name="status"
            containerClassName="flex items-center space-x-2"
            value={FILTER_STATUSES.ALL}
            checked={filterStatus === FILTER_STATUSES.ALL}
            onChange={handleStatusChange}
            label="All"
          />
          <Radio
            id="completed"
            name="status"
            value={FILTER_STATUSES.COMPLETED}
            checked={filterStatus === FILTER_STATUSES.COMPLETED}
            onChange={handleStatusChange}
            containerClassName="flex items-center gap-2"
            label="Completed"
          />
          <Radio
            id="todo"
            name="status"
            value={FILTER_STATUSES.TODO}
            checked={filterStatus === FILTER_STATUSES.TODO}
            onChange={handleStatusChange}
            containerClassName="flex items-center gap-2"
            label="To do"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(FilterTodoList);

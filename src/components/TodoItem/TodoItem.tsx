import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../../types/todo.types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { toggleTodoStatus, deleteTodo } from "../../redux/slices/todosSlice";
import { memo } from "react";

const TodoItem: React.FC<Todo> = ({ id, name, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    dispatch(toggleTodoStatus(id));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditToggle = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex items-center mb-2 ">
      <input
        type="checkbox"
        className="mr-2 accent-blue-500 h-4"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <EditTodoForm id={id} name={name} setIsEditing={setIsEditing} />
      ) : (
        <>
          <span
            className={`${
              completed ? "line-through text-gray-500" : ""
            } cursor-pointer `}
            onClick={handleCheckboxChange}
          >
            {name}
          </span>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={`text-blue-400 cursor-pointer transition-opacity ml-auto ${
              completed ? "opacity-50 pointer-events-none " : ""
            }`}
            onClick={handleEditToggle}
          />
        </>
      )}

      <FontAwesomeIcon
        icon={faTrash}
        className="ml-2.5 text-red-400 cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};
export default memo(TodoItem);

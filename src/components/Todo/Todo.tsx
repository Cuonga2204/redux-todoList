import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoProps } from "../../types/todo.types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTodoStatus, deleteTodo, editTodo } from "../TodoList/todosSlice";

export const Todo = ({ id, name, completed }: TodoProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

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

  const handleSaveEdit = () => {
    if (editedName.trim()) {
      dispatch(editTodo({ id, name: editedName }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center mb-2 justify-between">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="mr-2 accent-blue-500 w-4 h-4"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border px-1 py-0.5 text-gray-600 bg-gray-100 border-gray-300 rounded focus:outline-none focus:border-blue-400 transition-colors duration-200 ease-in-out"
            autoFocus
          />
        ) : (
          <span
            style={
              completed ? { opacity: 0.5, textDecoration: "line-through" } : {}
            }
          >
            {name}
          </span>
        )}
      </label>

      <div className="flex items-center">
        {isEditing ? (
          <button
            onClick={handleSaveEdit}
            className="text-blue-500 border border-blue-400 rounded px-2 py-0.5 text-sm hover:bg-blue-100 cursor-pointer"
          >
            Save
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={`text-blue-400 cursor-pointer transition-opacity ${
              completed ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={handleEditToggle}
          />
        )}

        <FontAwesomeIcon
          icon={faTrash}
          className="ml-2.5 text-red-400 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

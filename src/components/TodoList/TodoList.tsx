import { Todo } from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSlector } from "../../redux/selectors";
import { addTodo } from "./todosSlice";
export const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const todoList = useSelector(todoRemainingSlector);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoName.trim()) return;
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
      })
    );
    setTodoName("");
  };
  return (
    <div className="h-90 flex flex-col justify-between">
      <div>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </div>

      <div className="flex mb-4 mt-auto">
        <input
          type="text"
          placeholder="input add todo"
          className="w-full outline-none px-2.5 py-1 border-gray-200 border-1"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className={`w-[60px] border-1 border-gray-200 text-white cursor-pointer p-1.5
            ${
              !todoName.trim()
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-500"
            }
          `}
        >
          Add
        </button>
      </div>
    </div>
  );
};

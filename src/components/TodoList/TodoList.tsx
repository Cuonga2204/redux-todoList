import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { todoRemainingSelector } from "../../redux/selectors";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { memo } from "react";

const TodoList = () => {
  const todoList = useSelector(todoRemainingSelector);

  return (
    <div className="h-90 flex flex-col justify-between">
      <div>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </div>
      <AddTodoForm />
    </div>
  );
};
export default memo(TodoList);

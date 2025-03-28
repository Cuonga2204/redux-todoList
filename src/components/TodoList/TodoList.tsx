import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { todoRemainingSlector } from "../../redux/selectors";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
export const TodoList = () => {
  const todoList = useSelector(todoRemainingSlector);

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

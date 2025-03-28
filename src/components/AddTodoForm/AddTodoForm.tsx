import { Input } from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todosSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
export const AddTodoForm = () => {
  const [todoName, setTodoName] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTodo = useCallback(() => {
    if (!todoName.trim()) return;
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
      })
    );
    setTodoName("");
  }, [dispatch, todoName]);
  return (
    <div className="flex mb-4 mt-auto">
      <Input
        placeholder="input add todo"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <Button
        onClick={handleAddTodo}
        disabled={!todoName.trim()}
        children="Add"
        className="w-[60px]"
      />
    </div>
  );
};

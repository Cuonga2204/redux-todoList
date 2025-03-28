import  Input  from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useCallback, useState } from "react";
import { EditTodoFormProps } from "../../types/todo.types";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/slices/todosSlice";
export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  id,
  name,
  setIsEditing,
}) => {
  const [editedName, setEditedName] = useState<string>(name);
  const dispatch = useDispatch();
  const handleSaveEdit = useCallback(() => {
    if (editedName.trim()) {
      dispatch(editTodo({ id, name: editedName }));
      setIsEditing(false);
    }
  }, [dispatch, editedName, id, setIsEditing]);
  return (
    <>
      <Input
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
        className="w-[250px] mr-3"
      />
      <Button
        onClick={handleSaveEdit}
        children="Save"
        className="text-blue-500 border border-blue-400 rounded px-2 py-0.5 text-sm ml-auto
               hover:bg-blue-700"
      />
    </>
  );
};

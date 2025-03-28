export interface BaseTodo {
  id: string;
  name: string;
  completed: boolean;
}
export interface StateStore {
  filters: FilterTodo;
  todoList: Todo[];
}
export interface FilterTodo {
  search: string;
  status: string;
}
export interface InputProps {
  id?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export interface RadioProps extends InputProps {
  checked?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  label: string;
}
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}
export interface EditTodoFormProps {
  id: string;
  name: string;
  setIsEditing: (isEditing: boolean) => void;
}
export type PayLoadEditTodo = Pick<BaseTodo, "id" | "name">;
export type FilterStatus = "All" | "Completed" | "Todo";
export type Todo = BaseTodo;
export type TodoProps = BaseTodo;

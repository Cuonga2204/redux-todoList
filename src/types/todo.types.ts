export interface BaseTodo {
  id: string;
  name: string;
  completed: boolean;
}
export interface StateStore {
  filters: {
    search: string;
    status: string;
  };
  todoList: Todo[];
}
export type Todo = BaseTodo;
export type TodoProps = BaseTodo;


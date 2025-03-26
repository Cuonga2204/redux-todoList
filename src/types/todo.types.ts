export interface BaseTodo {
  id: string;
  name: string;
  completed: boolean;
}
export interface StateStore {
  filters:FilterTodo;
  todoList: Todo[];
}
export interface FilterTodo {
  search: string;
  status: string;
}
export type FilterStatus = 'All' | 'Completed' | 'Todo' ;
export type Todo = BaseTodo;
export type TodoProps = BaseTodo;


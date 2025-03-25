
export interface Todo {
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
export interface TodoProps {
  id:string;
  name: string;
  completed:boolean;
}

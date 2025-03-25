import "./App.css";
import { Filter } from "./components/Filters/Filter";
import { TodoList } from "./components/TodoList/TodoList";
function App() {
  return (
    <>
      <div className="w-[500px] h-[90vh] bg-white mx-auto my-0 p-5 rounded-md shadow-2xl mb-5">
        <h1 className="font-semibold text-4xl text-center">TodoList</h1>
        <Filter />
        <div className="h-px bg-gray-200 w-full my-4" />
        <TodoList />
      </div>
    </>
  );
}

export default App;

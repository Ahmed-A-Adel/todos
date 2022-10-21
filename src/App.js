import TodoApp from "./TodoApp";
import TodosProvider from "./contex/todos.context";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;

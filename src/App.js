import TodoApp from "./TodoApp";
import TodosProvider from "./contex/todos.context";
import { useReducer } from "react";
function App() {
  // const reducerTest = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return {
  //         count: state.count + action.amount,
  //       };
  //     case "DECREMENT":
  //       return {
  //         count: state.count - action.amount,
  //       };
  //     case "RESET":
  //       return {
  //         count: 0,
  //       };
  //   }
  // };

  // const [state, dispatch] = useReducer(reducerTest, { count: 0 });
  return (
    <div className="App">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
      {/* <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 7 })}>
        Increment 7
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 2 })}>
        DECREMENT 2
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET </button> */}
    </div>
  );
}

export default App;

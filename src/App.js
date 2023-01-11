import "./App.css";
import usePersistedState from "./hook";


export default function App() {
  const [count, setCount] = usePersistedState(0, "count");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <div className="btn">
        <button onClick={increaseCount}>Increment (+)</button>
        <button onClick={decreaseCount}>Decrement (-)</button>
      </div>
    </div>
  );
}


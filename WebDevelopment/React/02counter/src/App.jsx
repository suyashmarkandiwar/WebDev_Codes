import { useState } from "react";
import './App.css'

export default function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h2>React Learn</h2>
      <p>Counter: {counter}</p>
      <button onClick={addValue} disabled = {counter === 20}>Add</button>
      <br />
      <button onClick={removeValue} disabled = {counter === 0}>Remove</button>

    </>
  );
}
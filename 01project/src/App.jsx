import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const AddValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const SubValue = () => {
    if (counter>0) setCounter(counter - 1);
  };

  return (
    <>
      <h1> Add And Subtract Value</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={AddValue}> Add Value</button> <br />
      <br />
      <button onClick={SubValue}>Subtract Value</button>
    </>
  );
}

export default App;

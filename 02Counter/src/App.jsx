import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } 
  };

  return (
    <>
      <h1>Hello world </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br></br>
      <br></br>
      <button onClick={subValue}>Remove Value</button>

      <p>Value is :{counter} </p>
    </>
  );
}

export default App;

import { useState } from "react";
import { Counter } from "./components/Counter";
import Message from "./components/message";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleInc() {
    if (count >= 10) return;
    setCount((prev) => prev + 1);
  }

  function handleDec() {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <Counter count={count} handleInc={handleInc} handleDec={handleDec} />
      {count === 0 && <Message />}
      {count === 10 && <Message />}
    </>
  );
}

export default App;

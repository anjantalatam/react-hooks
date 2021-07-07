import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount((anjan) => anjan + 1);
    }
  };
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={increment}>Increment by 5</button>
    </div>
  );
}

export default HookCounterTwo;

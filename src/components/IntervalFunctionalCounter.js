import React, { useEffect, useState } from "react";

function IntervalFunctionalCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    console.log(count);
    setCount((count) => count + 1);
  };
  useEffect(() => {
    console.log("mounted");
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("unmounted");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default IntervalFunctionalCounter;

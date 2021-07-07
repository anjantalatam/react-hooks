import React, { useEffect, useState } from "react";

function HooksCounterUe() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  //   document.title = `Clicked ${count} times`;

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default HooksCounterUe;

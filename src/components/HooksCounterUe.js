import React, { useEffect, useState } from "react";

function HooksCounterUe() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updated Document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setCount((at) => at + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default HooksCounterUe;

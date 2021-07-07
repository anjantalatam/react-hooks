import React, { useState } from "react";

function HooksCounterFour() {
  const [items, setItems] = useState([]);
  const generate = () => {
    setItems([
      ...items,
      {
        key: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <button onClick={generate}>Generate</button>
      <ul>
        {items.map((item) => (
          <li key={item.key}> {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HooksCounterFour;

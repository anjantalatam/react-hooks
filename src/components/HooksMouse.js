import React, { useEffect, useState } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getCoordinates = (e) => {
    console.log("Log coordinates");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Counter Mounted");
    window.addEventListener("mousemove", getCoordinates);
    return () => {
      console.log("unmounting counter");
      window.removeEventListener("mousemove", getCoordinates);
    };
  }, []);

  return (
    <div>
      <h2>
        X-{x} Y-{y}
      </h2>
    </div>
  );
}

export default HooksMouse;

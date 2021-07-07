import React, { useEffect, useState } from "react";

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getCoordinates = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Logging Coordinates");
    window.addEventListener("mousemove", getCoordinates);
  }, []);

  return (
    <div>
      <h2>
        X-{x} Y-{y}
      </h2>
    </div>
  );
}

export default Mouse;

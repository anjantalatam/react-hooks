import React, { useState } from "react";
import ClassMouse from "./ClassMouse";
import HooksMouse from "./HooksMouse";

function MouseCounter() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>show</button>
      {display && <HooksMouse />}
    </div>
  );
}

export default MouseCounter;

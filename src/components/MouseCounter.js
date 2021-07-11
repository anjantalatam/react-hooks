import React, { useState } from "react";
import ClassMouse from "./ClassMouse";
import HooksMouse from "./HooksMouse";
import IntervalClassCounter from "./IntervalClassCounter";
import IntervalFunctionalCounter from "./IntervalFunctionalCounter";

function MouseCounter() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>show</button>
      {display && <IntervalFunctionalCounter />}
    </div>
  );
}

export default MouseCounter;
